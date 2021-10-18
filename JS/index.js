$(document).ready(function(){

    // Mobile scrollbar
    $(function() {
        let isMobile = window.matchMedia("only screen and (max-width: 991px)").matches;

        if (isMobile) {
            $("body").css("overflow-y", "visible");
            $("#navbar-row").css("background-color", "rgba(33, 33, 33, 1)");
        }
    });

    // NAVBAR START
    $(".nav-link").click(function() {

        $(this).addClass("current");
        $(this).removeClass("external");

        $(this).siblings().each(function() {
            $(this).addClass("external");

            if ($(this).hasClass("current")) {
                $(this).removeClass("current");
            }
        });
    });

    // HOME CHANGING TITLE
    let tOut;
    let wait;
    let title;
    let text_n = 0;
    let interval = 125;
    let text_n_small = 0;
    let titles_array = ["AN ASPIRING GAMEDEV", "A SOFTWARE PROGRAMMER", "CURIOUS", "HUMAN", "ME"]

    function title_change(n, elem) {
        
        title = titles_array[n];
        n += 1;

        wait = interval + (interval * title.length);

        jQuery.each(title.split(''), function (i, letter) {
            setTimeout(function () {
                $(elem).html($(elem).html() + letter);
            }, interval * i);
        });
        let i = title.length;

        if (n !== titles_array.length - 1) {
            setTimeout(function () {
                while (i >= 0) {
                    setTimeout(function () {
                        let text = $(elem).html();
                        let length = text.length - 1;
                        $(elem).html(text.substring(0, length));
                    }, wait + (interval/3 * i));
                    i--;
                }
            }, 1000);

            tOut = setTimeout(function () {title_change(n, elem)}, wait * 1.5 + 2000);
        }
    }
    setTimeout(function () {title_change(text_n, "#h2-hello")}, 1500);
    setTimeout(function () {title_change(text_n_small, "#h2-hello-small")}, 1500);

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
