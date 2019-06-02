// Web Pull to Refresh
// https://github.com/apeatling/web-pull-to-refresh
// License: MIT

// Customized by JPA @ Outsystems in 2015-12-22
// Last Modified by RDI @ Outsystems in 2017-01-12

var WebPullToRefresh = (function () {
    'use strict';
    
    var prevContent; // exists to destroy the event listener of the previous page 
                     // and not the page that you just travelled to

    /**
     * Hold all of the default parameters for the module
     * @type {object}
     */    
    var defaults = {
        // ID of the element holding pannable content area
        contentEl: 'content', 

        // ID of the element holding pull to refresh loading area
        ptrEl: 'ptr', 
        
        scrollEl: null,

        // Number of pixels of panning until refresh 
        distanceToRefresh: 70, 

        // Pointer to function that does the loading and returns a promise
        loadingFunction: false,

        // Dragging resistance level
        resistance: 2.5
    };

    /**
     * Hold all of the merged parameter and default module options
     * @type {object}
     */
    var options = {};

    /**
     * Pan event parameters
     * @type {object}
     */
    var pan = {
        enabled: false,
        distance: 0,
        startX: 0,
        startY: 0,
        startTime: null
    };
    
    /**
     * Easy shortener for handling adding and removing body classes.
     */
    var bodyClass = document.body.classList;
    
    /**
     * Initialize pull to refresh, hammer, and bind pan events.
     * 
     * @param {object=} params - Setup parameters for pull to refresh
     */
    var init = function( params ) {
        params = params || {};
        var elementToScroll = params.scrollEl || defaults.scrollEl;
        
        if(document.querySelector('.split-left')) {
            elementToScroll = document.querySelector('.split-left');
        } 
        
        options = {
            contentEl: params.contentEl || document.getElementById( defaults.contentEl ),
            ptrEl: params.ptrEl || document.getElementById( defaults.ptrEl ),
            scrollEl: elementToScroll /* JPA: Added the scrollEl because the original didn't support containers with overflow */,
            distanceToRefresh: params.distanceToRefresh || defaults.distanceToRefresh,
            loadingFunction: params.loadingFunction || defaults.loadingFunction,
            resistance: params.resistance || defaults.resistance
        };
        if ( ! options.contentEl || ! options.ptrEl ) {
            return false;
        }
        
        options.contentEl.addEventListener('touchstart', _touchStart);
        options.contentEl.addEventListener('touchmove', _touchMove);
        options.contentEl.addEventListener('touchend', _touchEnd);
    };

    /** Calculate touch start variables **/
    var _touchStart = function(e){
        var touchobj = e.changedTouches[0];
        pan.distance = 0;
        pan.startX = touchobj.pageX;
        pan.startY = touchobj.pageY;
        pan.startTime = new Date().getTime(); // record time when finger first makes contact with surface
        
        prevContent = options.contentEl;
        _panStart(e);
    };
    
    /**
     * Determine whether pan events should apply based on scroll position on panstart
     * 
     * @param {object} e - Event object
     */
    var _panStart = function(e) {
        var checkStart = 0;
        if(options.scrollEl) {
            /* JPA: Added the scrollEl because the original didn't support containers with overflow */
            checkStart = options.scrollEl.scrollTop;
        } else {
            checkStart = document.body.scrollTop;
        }

        if ( checkStart === 0 ) {
            pan.enabled = true;
        }
    };
    
    /** Calculate touch movement variables **/
    var _touchMove = function(e) {
        var touchobj = e.changedTouches[0];
        var distX = touchobj.pageX - pan.startX;
        var distY = touchobj.pageY - pan.startY;
        
        pan.distance = distY / options.resistance;
        
        // ignore horizontal scroll
        if(Math.abs(distX) > Math.abs(distY)) return true;
        
        if(distY > 0)
            _panDown(e);
        else
            _panUp(e);
    }

    /**
     * Handle element on screen movement when the pandown events is firing.
     * 
     * @param {object} e - Event object
     */
    var _panDown = function(e) {
        if ( ! pan.enabled ) {
            return;
        }
        
        //prevent scrolling while panning
        e.preventDefault();

        _setContentPan();
        _setBodyClass();
    };

    /**
     * Handle element on screen movement when the pandown events is firing.
     * 
     * @param {object} e - Event object
     */
    var _panUp = function(e) {
        if ( ! pan.enabled || pan.distance === 0 ) {
            return;
        }

        pan.distance = 0;
    };
    
    var _touchEnd = function(e){
        var touchobj = e.changedTouches[0];
        var distY = touchobj.pageY - pan.startY; // get total dist traveled by finger while in contact with surface
        pan.distance = distY  / options.resistance;
        var elapsedTime = new Date().getTime() - pan.startTime; // get time elapsed
        
        _panEnd(e);
    }

    /**
     * Set the CSS transform on the content element to move it on the screen.
     */
    var _setContentPan = function() {
        //options.contentEl.classList.add("no-transition");

        // Use transforms to smoothly animate elements on desktop and mobile devices
        options.contentEl.style.transform = options.contentEl.style.webkitTransform = 'translate3d( 0, ' + pan.distance + 'px, 0 )';
    };

    /**
     * Set/remove the loading body class to show or hide the loading indicator after pull down.
     */
    var _setBodyClass = function() {
        if ( pan.distance > options.distanceToRefresh ) {
            bodyClass.add( 'ptr-refresh' );
        } else {
            bodyClass.remove( 'ptr-refresh' );
        }        
    };

    /**
     * Determine how to animate and position elements when the panend event fires.
     * 
     * @param {object} e - Event object
     */
    var _panEnd = function(e) {
        if ( ! pan.enabled ) {
            return;
        }

        //options.contentEl.classList.remove("no-transition");
        //options.contentEl.style.transform = options.contentEl.style.webkitTransform = '';
        var strStyle = document.getElementById('b1-Content').getAttribute('style');

        if ( document.body.classList.contains( 'ptr-refresh' ) ) {
            _doLoading();
        } else if (strStyle != null && strStyle.indexOf('transform') == 0) {
        //} else {
            _doReset();
        }
        
        options.contentEl.classList.remove("no-transition");
        options.contentEl.style.transform = options.contentEl.style.webkitTransform = '';

        pan.distance = 0;
        pan.enabled = false;
    };

    /**
     * Position content and refresh elements to show that loading is taking place.
     */
    var _doLoading = function() {
        bodyClass.add( 'ptr-loading' );

        // If no valid loading function exists, just reset elements
        if ( ! options.loadingFunction ) {
            return _doReset();
        }

        // The loading function should return a promise
        var loadingPromise = options.loadingFunction();

        // For UX continuity, make sure we show loading for at least one second before resetting
        setTimeout( function() {
            // Once actual loading is complete, reset pull to refresh
            loadingPromise.then( _doReset );
        }, 1000 );
    };

    /**
     * Reset all elements to their starting positions before any paning took place.
     */
    var _doReset = function() {
        options.contentEl.classList.remove("no-transition");

        bodyClass.remove( 'ptr-loading' );
        bodyClass.remove( 'ptr-refresh' );
        bodyClass.add( 'ptr-reset' );

        var bodyClassRemove = function() {
            bodyClass.remove( 'ptr-reset' );
            document.body.removeEventListener( 'transitionend', bodyClassRemove, false );
        };

        document.body.addEventListener( 'transitionend', bodyClassRemove, false );
    };
    
    var destroy = function() {
        if(prevContent) {
            prevContent.removeEventListener('touchstart', _touchStart);
            prevContent.removeEventListener('touchmove', _touchMove);
            prevContent.removeEventListener('touchend', _touchEnd);
        }
    }

    return {
        init: init,
        destroy: destroy
    }

})();