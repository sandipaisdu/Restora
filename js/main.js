$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        items: 4,
        lazyLoad: true,
        navigation: true
    });

    $(function () {
        $('.portfolio_list').mixItUp();
    });
    


});