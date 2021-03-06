// requirejs.config({
//     paths:{
//         jquery: 'jquery-1.11.2'
//     }
// });
// require(['jquery', 'dialog'], function ($, dialog) {
//     $('#btn').on('click', function () {
//         var settings = {
//             width: 400,
//             height: 300,
//             title: '弹出层',
//             content: 'dialog.html'
//         };
//         dialog.open(settings);
//     });
// });

requirejs.config({
    paths: {
        jquery: 'jquery-1.11.2'
    }
});
require(['jquery', 'dialog1'], function ($, Dialog) {
    $('#btn').on('click', function () {
        var settings = {
            width: 400,
            height: 300,
            title: '弹出层',
            content: 'dialog.html'
        };
        var dialog1 = new Dialog(settings);
        dialog1.open();
    });
});