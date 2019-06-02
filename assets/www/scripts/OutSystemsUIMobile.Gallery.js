function Gallery() {
    
    var galleryEl;
    var listEl;
    var columnWidth;
    var divider;
    var gutter;
    var margin;
    var timeoutVar;

    var initGallery = function(widgetId, columnsInTabletLandscape, columnsInTabletPortrait, columnsInPhoneLandscape, columnsInPhonePortrait, isPhone, isTablet, isPortrait, hasGutter) {

        // define column width
        if (columnsInTabletLandscape === 0) {
            columnsInTabletLandscape = columnsInTabletPortrait;
        }

        if (columnsInPhoneLandscape === 0) {
            columnsInPhoneLandscape = columnsInPhonePortrait;
        }

        divider = (isPhone ? (isPortrait ? columnsInPhonePortrait : columnsInPhoneLandscape): (isPortrait ? columnsInTabletPortrait : columnsInTabletLandscape));

        gutter = hasGutter;
        
        // 1.96078431372549 gutter measure in Platform Grid
        margin = 1.96;
        columnWidth = (100 - (gutter ? (divider -1) * margin : 0)) / divider;

        // define the gallery element
        galleryEl = document.getElementById(widgetId);

        // define list element
        if(galleryEl.children[0].classList.contains("list")) {
            listEl = galleryEl.children[0];
        }

        // build or wait for the list render
        if(!listEl) {
            galleryEl.classList.add("gallery");
            resizeElements(galleryEl);
        } else {
            waitListRender();
        }
    }

    var waitListRender = function() {
        listEl = galleryEl.querySelector(".list");

        if(listEl !== null && !listEl.classList.contains("list-loading")) {
            listEl.classList.add("gallery");
            resizeElements(listEl);
            clearTimeout(timeoutVar);
        } else {
            timeoutVar = setTimeout(waitListRender, 500);
        }            
    }

    var resizeElements = function(el) {
        var isRTL = document.querySelector(".is-rtl");
        
        for(var i=0; i < el.children.length; i++) {
            
            // remove margins
            if(isRTL) {
                el.children[i].style.removeProperty('margin-right');
            } else {
                el.children[i].style.removeProperty('margin-left');
            }
            el.children[i].style.removeProperty('margin-left');
            el.children[i].style.removeProperty('margin-top');

            // set width to all elements
            el.children[i].style.width = columnWidth + "%";

            // set left margin to all except first in row
            if(i%divider !== 0 && gutter) {
                if(isRTL) {
                    el.children[i].style.marginRight = margin + "%";   
                } else {
                    el.children[i].style.marginLeft = margin + "%";   
                }
            }

            // set margin top to all expect first row
            if(i >= divider && gutter) {
                el.children[i].style.marginTop = 10 + "px";    
            }
            
        }
        galleryEl.classList.remove("init");
    }
    
    return {
      
        init: function(widgetId, columnsInTabletLandscape, columnsInTabletPortrait, columnsInPhoneLandscape, columnsInPhonePortrait, isPhone, isTablet, isPortrait, hasGutter) {
            initGallery(widgetId, columnsInTabletLandscape, columnsInTabletPortrait, columnsInPhoneLandscape, columnsInPhonePortrait, isPhone, isTablet, isPortrait, hasGutter);
        },
        
        update: function(widgetId, columnsInTabletLandscape, columnsInTabletPortrait, columnsInPhoneLandscape, columnsInPhonePortrait, isPhone, isTablet, isPortrait, hasGutter) {
            initGallery(widgetId, columnsInTabletLandscape, columnsInTabletPortrait, columnsInPhoneLandscape, columnsInPhonePortrait, isPhone, isTablet, isPortrait, hasGutter);
        }
    
    };

};