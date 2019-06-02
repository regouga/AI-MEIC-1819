 function TouchTrack() {

    var trackableElement;
    var startX = 0, startY = 0;
    var currentX = 0, currentY = 0;
    var touchingElement = false;
    var callbackStart, callbackMove, callbackEnd;
    var startTime;
    var doPreventDefault = false;
    var translateX;
    var translateY;
    var timeTaken;


    var init = function(element, start, move, end) {

        trackableElement = element;
        
        callbackStart = start;
        callbackMove = move;
        callbackEnd = end;

        startTime = new Date().getTime();

        addEventListeners();

    };
    
    var destroy = function() {
        removeEventListeners();
    };

    var addEventListeners = function () {

        trackableElement.addEventListener('touchstart', onTouchStart, false);
        trackableElement.addEventListener('touchmove', onTouchMove, false);
        trackableElement.addEventListener('touchend', onTouchEnd, false);
    };
    
    var removeEventListeners = function () {

        trackableElement.removeEventListener('touchstart', onTouchStart);
        trackableElement.removeEventListener('touchmove', onTouchMove);
        trackableElement.removeEventListener('touchend', onTouchEnd);
    };

    
    var onTouchStart = function (evt) {
        startTime = new Date().getTime();
        startX = evt.changedTouches[0].pageX;
        currentX = startX;
        
        startY = evt.changedTouches[0].pageY ;
        currentY = startY;

        touchingElement = true;

        //requestAnimationFrame(update);

        callbackStart(startX, startY);

    };

    var onTouchMove = function (evt) {
       
       if (!touchingElement)
          return;

      currentX = evt.changedTouches[0].pageX;
      currentY = evt.changedTouches[0].pageY;
      translateX = currentX - startX;
      translateY = currentY - startY; 
    
      callbackMove(evt, currentX, currentY, translateX, translateY);

      /*if (doPreventDefault) {
            evt.preventDefault();
        }*/

  };

  var onTouchEnd = function (evt) {
   
   if (!touchingElement)
      return;

      touchingElement = false;
      translateX = currentX - startX;
      translateY = currentY - startY; 

      timeTaken = (new Date().getTime() - startTime);
  
      callbackEnd(currentX, currentY, translateX, translateY, timeTaken);

    };

    return {

        init : function(element, start, move, end) {
            init(element, start, move, end);        
        },
        setPreventDefault : function(toPreventDefault) {
            doPreventDefault = toPreventDefault;
        },
        destroy : function() {
            destroy();
        }
    };
} 