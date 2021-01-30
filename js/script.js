$(function () {
    setTimeout(function () {
        $('.first-animation-img').each(function () {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateY(0)');
        });
        $('.first-animation-h1').each(function () {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateY(0)');
        });
        $('.first-animation-memo').each(function () {
            $(this).css('opacity', '1');
            $(this).css('transform', 'translateY(0)');
        });
    });

    // scroll animation
    $(window).scroll(function () {
        $('.scroll-animation').each(function () {
            let targetElement = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
        
//        $('.first-animation-img').each(function () {
//            let targetElement = $(this).offset().top;
//            let scroll = $(window).scrollTop();
//            let windowHeight = $(window).height();
//            if (scroll > targetElement - windowHeight/2) {
//                $(this).css('opacity', '1');
//                $(this).css('transform', 'translateY(0)');
//            }
//        });
    });
    
    $('.single-item').slick({
        arrows: false,
        autoplay: true,
        autoPlaySpeed: 2000,
        vertical: true
    });
    
    

});
