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

    // HOME CHANGING TITLE
    let wait;
    let title;
    let text_n = 0;
    let interval = 125;
    let titles_array = ["ASPIRING GAMEDEV", "SOFTWARE PROGRAMMER", "HUMAN"]

    function title_change(n) {

        n = n % titles_array.length;
        title = titles_array[n];

        wait = interval + (interval * title.length);

        jQuery.each(title.split(''), function (i, letter) {
            setTimeout(function () {
                $('#h2-hello').html($('#h2-hello').html() + letter);
            }, interval * i);
        });
        let i = title.length;

        setTimeout(function () {
            while (i >= 0) {
                setTimeout(function () {
                    let text = $('#h2-hello').html();
                    let length = text.length - 1;
                    $('#h2-hello').html(text.substring(0, length));
                }, wait + (interval * i));
                i--;
            }
        }, 1000);

        text_n += 1;
        setTimeout(function () {title_change(text_n)}, wait * 2 + 1750);
    }

    title_change(text_n);

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
