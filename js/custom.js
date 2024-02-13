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
        autoplaySpeed: 4000,
        speed: 400,
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

    $('.MainContent .con_area .itm').on('click', function () {
        $('.MainContent .con_area .itm').removeClass('on');
        $(this).addClass('on');
        $('.MainContent .con_area .itm .txt').removeClass('on');
        $('.MainContent .con_area').addClass('on');
    });

    $('.notice_slide').slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        vertical: true,
    });

})