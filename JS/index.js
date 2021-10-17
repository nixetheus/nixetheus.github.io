$(document).ready(function(){

    // Mobile scrollbar
    $(function() {
        let isMobile = window.matchMedia("only screen and (max-width: 991px)").matches;

        if (isMobile) {
            $("body").css("overflow-y", "visible");
        }
    });

    // NAVBAR START
    $(".nav-item").click(function() {

        $(this).addClass("current");
        $(this).removeClass("external");

        $(this).siblings().each(function() {
            $(this).addClass("external");

            if ($(this).hasClass("current")) {
                $(this).removeClass("current");
            }
        });
    });

    // PROJECT START
    $("#project-page-proj-text").hide();

    $("#p-link").click(function() {
        $(this).change_project();

        $("#code-tag").text("CODE");
        $(document).matrix("#code-tag", 7, 40);
    });

    $("#prev-butt").click(function() {
        $(this).change_project(-1);
    });

    $("#next-butt").click(function() {
        $(this).change_project(1);
    });

    $("body").change_project();

});
