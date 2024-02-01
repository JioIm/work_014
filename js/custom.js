$(function () {

    $(window).on('scroll', function () {
    const scrollHeight = $(window).scrollTop();
    if (scrollHeight > 0) {
        $('.header').addClass('on')
    } else {
        $('.header').removeClass('on')
    }
    });
    
    $('.main_slide').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        // speed: 400,
        fade: true,
        cssEase: 'linear'
    });

     $('.a_tab li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.tab_content .content')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on');
     });
    
    jQuery.datetimepicker.setLocale('de');
})