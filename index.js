$(document).ready(function(){

    // PROJECT DIV MAIN FUNCTION END

    // GLOBAL
    let number = 0;

    // 0 - 1 Function
    (function( $ ){
        $.fn.matrix_text = function(elem, prev_text, text_array_index) {

            let text = "";
            for (let i = 0; i < prev_text.length; i++) {
                if (text_array_index.includes(i)) {
                    text += Math.round(Math.random());
                } else {
                    text += prev_text.charAt(i);
                }
            }
            $(elem).text(text);
        };
    })( jQuery );

    (function( $ ){

        $.fn.matrix = function(elem, rate, seconds, hack_val=0) {

            let timesRun = 0;
            let prev_text = $(elem).text().trim();
            if (hack_val) {prev_text = $(elem).text().replace(/ /g,'');}

            let times = rate * prev_text.length;
            let text_array_index = [...Array(prev_text.length).keys()];

            let interval = setInterval(function(){

                if(timesRun === times) {clearInterval(interval);}
                if (timesRun % rate === 0) {text_array_index.shift();}
                $(elem).matrix_text(elem, prev_text, text_array_index);
                timesRun += 1;

            }, seconds);

        };

    })( jQuery );

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

    // HOME START
    setTimeout(function() {
        $(document).matrix("#h1-hello", 3, 75, 1);
    }, number);
    setTimeout(function() {
        $(document).matrix("#h2-hello", 4, 50);
    }, number);

    let h1_hello_text = $("#h1-hello").html();
    let h2_hello_text = $("#h2-hello").html();
    $("#h-link").click(function() {

        $("#h1-hello").html(h1_hello_text);
        $("#h2-hello").html(h2_hello_text);

        $(document).matrix("#h1-hello", 2, 75, 1);
        $(document).matrix("#h2-hello", 2, 90);
    });

    // ABOUT START
    setTimeout(function() {
        $(document).matrix("#about-tag", 10, 75);
        $(document).matrix("#contacts-tag", 7, 75);
        $(document).matrix("#email_contact", 7, 75);
        $(document).matrix("#github_contact", 7, 75);
    }, number + 100);

    let about_tag_text = $("#about-tag").html();
    let contacts_tag_text = $("#contacts-tag").html();
    let email_contact_text = $("#email_contact").html();
    let github_contact_text = $("#github_contact").html();

    $("#a-link").click(function() {
        $("#about-tag").html(about_tag_text);
        $(document).matrix("#about-tag", 7, 40);

        $("#contacts-tag").html(contacts_tag_text);
        $(document).matrix("#contacts-tag", 7, 40);

        $("#email_contact").html(email_contact_text);
        $(document).matrix("#email_contact", 7, 60);

        $("#github_contact").html(github_contact_text);
        $(document).matrix("#github_contact", 7, 60);
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

    let currentProject = 0;
    // PROJECT DIV MAIN FUNCTION START
    (function( $ ){

        $.fn.change_project = function(changeIndex=0) {

            currentProject += changeIndex;
            if (currentProject < 0) currentProject = projects.length - 1;
            if (currentProject > projects.length - 1) currentProject = 0;

            $("#code-tag").hide();
            $("#github-text").hide()
            $(".project-button").hide();
            $("#proj-button-row").hide();
            $("#project-code-over-div").hide();
            $("#project-page-proj-code").hide();
            $("#project-page-proj-name").hide();
            $("#project-page-proj-text").hide();

            $(".project-button").removeClass("project-button-effect");
            $("#project-page-proj-code").removeClass("proj-page-effect");
            $("#project-page-proj-name").removeClass("proj-page-effect");

            $(".project-button").show();
            $("#proj-button-row").show();
            $("#project-page-proj-code").show();
            $("#project-page-proj-name").show();

            setTimeout(function() {

                $("#project-page-proj-code").text(projects[currentProject]["code"]);
                $("#project-page-proj-code").addClass("proj-page-effect");
                $(document).matrix("#project-page-proj-code", 4, 75);

            }, 750);

            setTimeout(function() {

                $("#project-page-proj-name").text(projects[currentProject]["name"]);
                $("#project-page-proj-name").addClass("proj-page-effect");
                $(document).matrix("#project-page-proj-name", 4, 75);

            }, 750);

            setTimeout(function() {
                $("#project-page-proj-text").text(projects[currentProject]["desc"]);
                $("#project-page-proj-text").slideDown(1250);
            }, 2000);

            setTimeout(function() {
                $(".project-button").addClass("project-button-effect");
            }, 2500);

            setTimeout(function() {
                $("#github-text").show();
                $("#github-text").text("GITHUB");
                $("#proj-github").attr("href", projects[currentProject]["github"]);
                $(document).matrix("#github-text", 3, 50);
            }, 3000);

            setTimeout(function() {
                $("#code-tag").show();
                $("#code-tag").text("CODE");
                $(document).matrix("#code-tag", 3, 50);
            }, 3500);

            setTimeout(function() {
                $("#project-code-over-div").children("*").remove();
                $("#project-code-over-div").append(projects[currentProject]["specs"])
                $("#project-code-over-div").slideDown(1250);
            }, 4000);

        };

    })( jQuery );
    $("body").change_project();

});

// PROJECTS
let projects = [
    {
        "name": "Cate",
        "code": "0000 0000",
        "github": "https://github.com/nixetheus/CATE",
        "desc": "CATE, the Code And Text Editor, is a side project of mine from when I was in high school.\n" +
                "As the name implies its main use is that of an editor, particularly for python and c, since\n" +
                "syntax highlighting and code completition is mainly available for these languages.\n" +
                "The editor is completely written in Python using Tkinter and has a lot of customization options,\n" +
                "particularly in the form of themes and color changes.\n" +
                "It features a primitive internal python interpreter.\n",
        "specs": "<p class=\"project-page-proj-expl\">\n" +
            "Born in 2016, CATE has been my first big project since I have started programming. " +
            "All in all, it is a simple code and text editor, with a few more complex features " +
            "like a primitve form of syntax highlighting and code completition." +
            "<img class='project-page-proj-img' alt='cate-png' src='Imgs/projects/cate.png'>" +
            "</p>\n" +
            "<h5 class=\"subsession-title\">CUSTOMIZATION</h5>\n" +
            "<p class=\"project-page-proj-expl\">\n" +
            "Customization was a big during the creation of CATE, mostly because I love playing with " +
            "colors and this was a fun way to add variety to my project" +
            "</p>\n" +
            "<p class=\"project-page-proj-code\">\n" +
            "" +
            "</p>\n" +
            "<p class=\"project-page-proj-expl\">\n" +
            "</p>"
    }
];
