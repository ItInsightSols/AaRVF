// Mobile Click Drop Down
$('.dropnav > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
});

// Lazy Load Images using Intersection Observer
$(document).ready(function() {
    $('.loader').hide();
});
$("img.lazy").lazyload({ effect: "fadeIn" });


// toggle 
$(".nav-toggle").click(function() {
    $(this).toggleClass("on");
    $("nav").toggleClass("activated");
    $("nav").slideToggle();
});


// Sticy nav bar 
if ($(window).scrollTop() >= 300) {
    $('header').addClass('fixed-header');
} else {
    $('header').removeClass('fixed-header');

};

// Scroll Top
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll_To_Top').fadeIn();
    } else {
        $('.scroll_To_Top').fadeOut();
    }
});
$('.scroll_To_Top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 10);
    return false;
});


//  Tab Section For Header
$(function() {
    var activeIndex = $(".active").index(),
        $contentlis = $(".divtabsecare"),
        $tabslis = $(".hedtabsecbtn li");

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $(".hedtabsecbtn").on("click", "li", function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass("active");
        $current.addClass("active");
        $contentlis.hide().eq(index).show();
    });
});


// Header Section Tab 
$(function() {
    var activeIndex = $('.active').index(),
        $contentlis = $('.main_body'),
        $tabslis = $('.side_nav li');

    // Show content of active tab on loads
    $contentlis.eq(activeIndex).show();

    $('.side_nav').on('click', 'li', function(e) {
        var $current = $(e.currentTarget),
            index = $current.index();

        $tabslis.removeClass('active');
        $current.addClass('active');
        $contentlis.hide().eq(index).show();
    });
});