/**************************************************************
* OutSystems UI Mobile
*
* 0. Version
* 1. Init Events
* 2. Handle clicks on body
* 3. Feedback on clicked list items and bottom bar items
* 4. Feedback of buttons clicked
* 5. Check if parent elements have the given class
* 6. Use Hide On Scroll feature
* 7. Generic toggle class function
* 8. Generic function to get closest element - Android 4.4.2
* 9. Fix Inputs for iOS devices
*
**************************************************************/
var osui = new osuijs();
// 0. Version
function osuijs() {
    
    //0. Version
    var getVersion = function() {
        var version = "2.0.0";
        console.log("OutSystems UI Mobile - Version " + version);
    };

    // 1. Init Events
    document.body.addEventListener("click", bodyClick);

    // 2. Handle clicks on body
    function bodyClick(event) {
        if(event.target.classList.contains("btn")) {
            buttonEffect(event.target);
            return;
        }
        
        var found = hasSomeParentTheClass(event.target, 'list-item') || hasSomeParentTheClass(event.target, 'bottom-bar-item');

        if(found) {
            clickEffect(found);
        }
    }
    
    // 3. Feedback on clicked elements
    function clickEffect(el) {
        var spanEl = document.createElement("span");
        spanEl.classList.add("scale-animation"); 
        
        el.appendChild(spanEl);
        
        el.addEventListener("animationend", OnTransitionEnd, false);
        el.addEventListener("webkitAnimationEnd", OnTransitionEnd, false);
            
        function OnTransitionEnd() {
            if(spanEl && this == el && this === spanEl.parentNode) {
                this.removeChild(spanEl);
            }
        }
    }
    
    // 4. Feedback on clicked buttons
    function buttonEffect(el) {
        var spanEl = document.createElement("span");
        spanEl.classList.add("btn-animation"); 
        el.appendChild(spanEl);
        
        setTimeout(function(){
            el.removeChild(spanEl);
        }, 1800);
    }
    
    // 5. Check if parent elements have the given class
    function hasSomeParentTheClass(element, classname) {
        if(element) {
            // only if it has a class, only if it's beneath 'main-content' and doesn't pass it, if it's not a chart
            if(typeof element.className !== 'undefined' && !element.classList.contains(".main-content") && !(element instanceof SVGElement)) {
                if (element.className.split(' ').indexOf(classname)>=0) {
                    return element;
                } else {
                    return hasSomeParentTheClass(element.parentNode, classname);
                }
            }
        }
        
        return undefined;
    }
    
    // 6. Use Hide On Scroll feature
    var hideOnScroll = function() {
        
        var addEvents = function(header) {
    
            var content = document.querySelector(".active-screen .content");
    
            if(header.classList.contains("hide") && content) {
                
                var mainContentHeight = document.querySelector('.main-content').scrollHeight;
                var startY = 0;
                var threshold = 60;
                
                if(mainContentHeight - threshold > content.offsetHeight) {
                    content.addEventListener('touchstart', function(e) {
                        startY = e.touches[0].pageY;
                    }, false);
        
                    content.addEventListener('touchmove', function(e) {
                        var c = e.touches[0].pageY;
                        var translateY = c - startY;
                        
                        if (c < startY - threshold && translateY < 0){
                            header.classList.add("header-on-scroll");
                        } else if(c > startY + threshold){
                            header.classList.remove("header-on-scroll");
                        }
        
                    }, false);
                }
            }
        };  
    
        return {        
            init: function() {        
                header = document.querySelector('.header');
                if(header !== null) {            
                    addEvents(header);
                }
            }
        };
        
    };
    
    // 7. Generic toggle class function
    var toggleClass = function(el, state, className) {
    
        var classList = el.classList;   
        
        if(!state) {
            setTimeout(function() {
                if(!state) {
                    classList.remove(className);
                }
            }, 500);
        } else {
            classList.add(className);
            el.offsetHeight;
        }    
    };
    
    // 8. Generic function to get closest element - Android 4.4.2
    var getClosest = function (elem, selector) {
        var firstChar = selector.charAt(0);
        // Get closest match
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            // If selector is a class
            if ( firstChar === '.' ) {
                if ( elem.classList.contains( selector.substr(1) ) ) {
                    return elem;
                }
            }
            // If selector is an ID
            if ( firstChar === '#' ) {
                if ( elem.id === selector.substr(1) ) {
                    return elem;
                }
            } 
            // If selector is a data attribute
            if ( firstChar === '[' ) {
                if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
                    return elem;
                }
            }
            // If selector is a tag
            if ( elem.tagName.toLowerCase() === selector ) {
                return elem;
            }
        }
        return false;
    };
    
    // 9. Fix Inputs for iOS devices
    
    var fixInputs = function() {
    
        var originalPosition = 0;
        var currentPosition = 0;
        var content = document.querySelector('.content');    
        var inputs = document.querySelectorAll('input:not([type=button]):not([type=checkbox]):not([type=color]):not([type=file]):not([type=hidden]):not([type=image]):not([type=image]):not([type=radio]):not([type=range]):not([type=reset]):not([type=submit]), textarea');
    
        if(inputs.length !== 0) {
            for (var i = inputs.length - 1; i >= 0; i--) {
                inputs[i].style.webkitUserSelect = 'auto';
            }
            
            if(content) {
                
                content.addEventListener('touchstart', function(e) {
                    originalPosition = e.changedTouches[0].pageY;
                    for (i = inputs.length - 1; i >= 0; i--) {
                        inputs[i].style.webkitUserSelect = 'auto';
                    }
                });
        
                content.addEventListener('touchmove', function(e) {
                    currentPosition = e.touches[0].pageY;
                    if(Math.abs(originalPosition - currentPosition) > 10) {
                        for (i = inputs.length - 1; i >= 0; i--) {
                            inputs[i].style.webkitUserSelect = 'none';
                        }    
                    } else {
                        for (i = inputs.length - 1; i >= 0; i--) {
                            inputs[i].style.webkitUserSelect = 'auto';
                        }     
                    }
                });
        
                content.addEventListener('touchend', function(e) {
                    setTimeout(function() {
                        for (i = inputs.length - 1; i >= 0; i--) {
                            inputs[i].style.webkitUserSelect = 'auto';
                        }
                     },0);
                });    
            }
        }
    };

    return { 
        GetVersion: function() {
            getVersion();       
        },
        HideOnScroll: function(){
            return hideOnScroll();
        },
        ToggleClass: function(el, state, className){
            toggleClass(el, state, className);
        },
        GetClosest: function(elem, selector){
            return getClosest(elem, selector);
        },
        FixInputs: function(){
            fixInputs();
        }
    };
    
}