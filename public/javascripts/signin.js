// var $ = require('jquery');

$(document).ready(function () {
    $('#myTab a[href="#stusign"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $('.tab-pane[id="stusign"]').addClass("active");
    })

    $('#myTab a[href="#tearegister"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $('.tab-pane[id="tearegister"]').addClass("active");
    })

    $('#myTab a[href="#teasign"]').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
        $('.tab-pane[id="teasign"]').addClass("active");
    })
})
