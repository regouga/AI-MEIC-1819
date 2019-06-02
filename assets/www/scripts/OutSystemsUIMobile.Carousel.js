function newCarousel() {
    
    var options;
    var carousel;
    var carouselEl;
    var listEl;
    var listElNodes;
    var dotsContainer;
    var dotsElNodes;
    var leftNavigation;
    var rightNavigation;
    var timeoutVar;
    var lastMaxElements;

    var initCarousel = function(opts) {
        options = opts;
        
        // Carousel selectors
        carousel = document.getElementById(options.widgetId);
        carouselEl = carousel.querySelector('.carousel-container-content');
        dotsContainer = carousel.querySelector('.carousel-dots-container');
        listEl = carousel.querySelector('.carousel-container-content > .list');
        leftNavigation = carousel.querySelector('.carousel-navigation-left');
        rightNavigation = carousel.querySelector('.carousel-navigation-right');
        
        options.currentPosition = options.initialPosition;
        
        if(isList()) {
            waitListRender();
            
        } else {
            listElNodes = carousel.querySelector('.carousel-container-content').childNodes;
            options.initAction;
            buildCarousel();
        }
    };

    // Verify if carousel is working with list
    var isList = function() {
        if(!listEl) {
            return false;
        }
        return true;
    };
    
    var waitListRender = function() {
        if(!listEl.classList.contains("list-loading") && carousel.querySelector('.list').childNodes.length !== 0) {
            clearTimeout(timeoutVar);
            listElNodes = carousel.querySelector('.list').childNodes;
            options.initAction;
            buildCarousel();
        } else {
            timeoutVar = setTimeout(waitListRender, 100);
        }
    };
    
    var buildCarousel = function() {
        setVariables();
        createDots(options.initialPosition);
        
        // Add active class
        elementActive = listElNodes[options.initialPosition];
        if(elementActive) {
            elementActive.classList.add('active');
        }
        
        transformUi(options.lastX);
        transformElements();
        transformNavigation();
        
        lastMaxElements = options.maxElements;
        
        carousel.classList.remove('init');
    };
    
    // Refresh Carousel's items nodes and key variables
    var setVariables = function() {
        listElNodesWidth = carouselEl.offsetWidth;
        options.nodeWidth = (parseFloat(listElNodesWidth) - (options.margin * (options.items - 1))) / options.items;
        options.maxElements = listElNodes.length;
        options.lastX = ((options.nodeWidth * options.currentPosition) + (options.margin * options.currentPosition)) * -1;
    };
    
    // Add orRemove disabled class to navigation depeding on loop and current position
    var transformNavigation = function() {
        if(!options.loop) {
            if(options.currentPosition === 0) {
                leftNavigation.classList.add('disabled');
            } else {
                leftNavigation.classList.remove('disabled');
            }
            if(options.currentPosition === options.maxElements - 1) {
                rightNavigation.classList.add('disabled');
            } else {
                rightNavigation.classList.remove('disabled');
            }
        }
    };
    
    // Moves carousel UI
    var transformUi = function(value) {
        
        requestAnimationFrame(function(){
            carouselEl.style.webkitTransform = 'translateX(' + value + 'px) translateZ(0) translateY(0)';
            carouselEl.style.transform = 'translateX(' + value + 'px) translateZ(0) translateY(0)';
            carouselEl.classList.add('carousel--animatable');
        });
        
    };    
    
    // Transform carousel items
    var transformElements = function() {
        
        for(i = 0; i < options.maxElements; i++) {
                
            if(options.items > 1){
                listElNodes[i].style.width = options.nodeWidth + 'px';
            }
            
            listElNodes[i].style.margin = '0 ' + options.margin + 'px 0 0' ;
            scale(i, .9);
            
            if(options.center) {
                if(i === 0) {
                    listElNodes[i].style.margin = '0 ' + options.margin + 'px 0 0' + ((options.nodeWidth + options.margin) * (Math.floor(options.items-1)) / 2) + 'px';
                }
            }
        }
        
        scale(options.currentPosition, 1);
    };

    // Scale elements
    var scale = function(target, value) {
        if(options.scale) {
            if(listElNodes[target]) {
                listElNodes[target].style.transform = 'scale(' + value + ') translateZ(0)';
                listElNodes[target].style.webkitTransform = 'scale(' + value + ') translateZ(0)';
                if(!carousel.classList.contains("init")) {
                    listElNodes[target].classList.add('carousel--animatable');
                }
            }
        }
    };
    
    // Create dots for navigate between items
    var createDots = function(target) {
        for(i = 0; i < options.maxElements; i++) {
            var dotEl = document.createElement('div');
            dotEl.classList.add('carousel-dot');
            dotsContainer.appendChild(dotEl);
        }
        dotsElNodes = carousel.querySelectorAll('.carousel-dot');
        for(i = 0; i < dotsElNodes.length; i++){
            dotsElNodes[i].addEventListener('click', clickDot);
        }
        if(dotsElNodes.length > 0){
            dotsElNodes[target].classList.add('active');
        }
    };
    
    // Destroy dots
    var destroyDots = function() {
        dotsElNodes = carousel.querySelectorAll('.carousel-dot');
            for(i = 0; i < options.maxElements; i++) {
                if(dotsElNodes[i]) {
                    dotsContainer.removeChild(dotsElNodes[i]);
                }
            }
    };
    
    // Add Goto action to clicked dot
    var clickDot = function(event) {
        for(i = 0; i < dotsElNodes.length; i++){
            if(dotsElNodes[i] === event.target) {
                options.goToAction(i);
            }
        }
    };
    
    // Scale Calculation
    var ScaleCalc = function(scale) {
        if (scale < 0) {
            scale = (scale / 1000) * -1;
        } else {
            scale = scale / 1000;
        }
        if(scale > .09) {
            return .09;
        }
        return scale;
    };

    return {
        init: function(opts) {
            initCarousel(opts);
        },
        
        // Destroy dots and recreate them for each element on list (usually used after list remove)
        updateCarousel: function() {
            setTimeout(function() { // Wait for list remove
                // Get new list of nodes
                if(isList()) {
                    listElNodes = carousel.querySelector('.list').childNodes;
                } else {
                    listElNodes = carousel.querySelector('.carousel-container-content').childNodes;
                }
                
                destroyDots();
                
                lastMaxElements = options.maxElements;
                options.maxElements = listElNodes.length;
                
                if(options.maxElements > lastMaxElements){
                    
                    options.goToAction(options.currentPosition);
                    createDots(options.currentPosition);
                    
                } else if(options.maxElements <= lastMaxElements){
                    
                    if(options.currentPosition === options.maxElements) {
                            options.goToAction(options.currentPosition - 1);
                            createDots(options.currentPosition);
                            
                    } else {
                        if((options.maxElements - 1) >= 0) { // carousel has element?
                            options.goToAction(options.currentPosition);
                            createDots(options.currentPosition);
                        }
                    }
                
                }

            },50); // Test list remove time
        },
    
        goTo: function(target) {
            setVariables();
            if(listElNodes[options.currentPosition]) {
                listElNodes[options.currentPosition].classList.remove('active');
            }
            if(dotsElNodes[options.currentPosition]) {
                dotsElNodes[options.currentPosition].classList.remove('active');
            }
            value = ((options.nodeWidth + options.margin) * target) * -1;
            scale(options.currentPosition, .9);
            scale(target, 1);
            options.currentPosition = target;
            
            transformUi(value);
            transformNavigation();
            
            options.lastX = value;
            if(listElNodes[target]) {
                listElNodes[target].classList.add('active');
            }
            if(dotsElNodes[target]) {
                dotsElNodes[target].classList.add('active');
            }
        },
        
        previous: function() {
            if(options.currentPosition > 0){
                options.goToAction(options.currentPosition - 1);
            } else {
                if(options.loop){
                    options.goToAction(options.maxElements - 1);
                } else {
                    this.backToMiddle();
                }
            }
        },
        
        next: function() {
            if(options.currentPosition < options.maxElements - 1){
                options.goToAction(options.currentPosition + 1);
            } else {
                if(options.loop){
                    options.goToAction(0);
                } else {
                    this.backToMiddle();
                }
            }
        },
        
        // Return number of items inside carousel to pattern
        getMaxElements: function() {
            return options.maxElements;
        },
        
        // Return number of items inside carousel to pattern
        getNodeWidth: function() {
            return options.nodeWidth;
        },
        
        gestureMove: function(offsetX) {
            value = options.lastX + offsetX;
            transformUi(value);
            
            // Scale transform while gestureMove using offset as base
            scaleNext = .9 + ScaleCalc(offsetX) + .01;
            scaleCurrent = 1 - ScaleCalc(offsetX) - .01;
    
            if(offsetX < 0) {
                if(options.currentPosition < (options.maxElements - 1)) {
                    scale(options.currentPosition + 1, scaleNext);
                    scale(options.currentPosition, scaleCurrent);
                } else {
                    scale(options.maxElements - 1, scaleCurrent);
                    scale(0, 1);
                }
            } else if(offsetX > 0) {
                if(options.currentPosition > 0) {
                    scale(options.currentPosition - 1,scaleNext);
                    scale(options.currentPosition,scaleCurrent);
                } else {
                    scale(options.maxElements - 1, 1);
                    scale(0, scaleCurrent);
                }
            }
        },
        
        addNoTransitionClasses: function() {
            carouselEl.classList.add('no-transition');
            
            if(listElNodes[options.currentPosition - 1]) {
                listElNodes[options.currentPosition - 1].classList.add('no-transition');
            }
            
            if(listElNodes[options.currentPosition]) {
                listElNodes[options.currentPosition].classList.add('no-transition');
            }
            
            if(listElNodes[options.currentPosition + 1]) {
                listElNodes[options.currentPosition + 1].classList.add('no-transition');
            }
        },
        
        removeNoTransitionClasses: function() {
            carouselEl.classList.remove('no-transition');
            
            if(listElNodes[options.currentPosition - 1]) {
                listElNodes[options.currentPosition - 1].classList.remove('no-transition');
            }
            
            if(listElNodes[options.currentPosition]) {
                listElNodes[options.currentPosition].classList.remove('no-transition');
            }
            
            if(listElNodes[options.currentPosition + 1]) {
                listElNodes[options.currentPosition + 1].classList.remove('no-transition');
            }
        },
        
        onOrientationChange: function() {
            timeoutVar = setTimeout(function() {
                setVariables();
                transformElements();
                transformUi(options.lastX);
                window.dispatchEvent(new Event('resize')); // force charts redraw
                clearTimeout(timeoutVar);
            }, 300);
        },
        
        backToMiddle: function() {
            transformUi(options.lastX);
            scale(options.currentPosition, 1);
            scale(options.currentPosition + 1, .9);
            scale(options.currentPosition - 1, .9);
        }
    };
}