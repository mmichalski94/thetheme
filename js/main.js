/*
$('.carousel').carousel({
    interval: 5000
})

$(document).on('click', 'a[href^="#"]', function (event) {
        
        event.preventDefault(); 
        var menuHeight = $('#main-nav').height();
        
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - menuHeight
        }, 500);
         a co jeśli zmienimy sobie wysokość menu w stylach? (google> get height)
    });
});
*/

/* slider jQuery*/
'use strict';
$(function () {
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    slideShow.css('width', slideCount * 100 + '%');
    slideShow.find('.single-slide').each(function (index) {
        // nadawanie styli w sposób dynamiczny
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': slideWidth * index + '%'
        });
    });

    $('.prev-slide').click(function (e) {
        slide(slideIndex - 1);

    });


    $('.next-slide').click(function (e) {
        slide(slideIndex + 1);

    });


    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        var slideCaption = $('.slider-caption').eq(newSlideIndex);
        // eq pozwala nam znaleźć odpowiedni slide?
        slideCaption.hide();

        var marginLeft = (newSlideIndex * (-100)) + '%';
        slideShow.animate({
            'margin-left': marginLeft
        }, 800, function () {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn('slow')
        });
    }


});
