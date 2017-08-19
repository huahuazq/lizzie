requirejs.config({
    paths : {
        jquery: "jquery-1.11.2"
    }
});
require(['jquery', 'carousel'], function ($, Carousel) {
    var imgs1 = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
    var settings = {
        selector: '#container',
        imgArr: imgs1,
        speed: 500,
        buttonStyle : "square",
        arrowsPos : "bottom"
    };
    var carousel1 = new Carousel(settings);
    carousel1.init();
    var imgs2 = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
    var setting2 = {
        selector: '#container',
        imgArr: imgs2,
        speed: 500,
        buttonStyle : "circle",
        arrowsPos : "center"
    };
    var carousel2 = new Carousel(setting2);
    carousel2.init();
});