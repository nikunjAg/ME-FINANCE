$(document).ready(function() {
    console.log('Loaded');

    // To make the navbar sticky to Top
    $('.welcome-section').waypoint(function(direction){
        if(direction == 'down') {
            $('nav').addClass('sticky');
        }
        else if(direction == 'up') {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '100px'
    });

    // To add the scrolling effect
    $('.navbar-nav > li > a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 50}, 'slow');
    });

    $('.navbar-nav > li > a').click(function(e) {
        $('.navbar-collapse').toggleClass('show');
        var toggler = $('.navbar-toggler');
        toggler.toggleClass('collapsed');
        toggler.attr('aria-expanded', !toggler.attr('aria-expanded'));
    });

});