$(document).ready(function(){

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

    // HOME START
    setTimeout(function() {
        $(document).matrix("#h1-hello-name", 8, 75, 1);
        $(document).matrix("#h1-hello-surname", 8, 75, 1);
    }, number);
    setTimeout(function() {
        //$(document).matrix("#h2-hello", 4, 50);
    }, number);

    // HOME-SMALL START
    setTimeout(function() {
        $(document).matrix("#h1-hello-small", 3, 75, 1);
    }, number);
    setTimeout(function() {
        //$(document).matrix("#h2-hello-small", 4, 50);
    }, number);

    let h1_hello_text_n = $("#h1-hello-name").html();
    let h1_hello_text_s = $("#h1-hello-surname").html();
    let h2_hello_text = $("#h2-hello").html();
    $("#h-link").click(function() {

        $("#h1-hello-name").html(h1_hello_text_n);
        $("#h1-hello-surname").html(h1_hello_text_s);

        $(document).matrix("#h1-hello-name", 4, 75, 1);
        $(document).matrix("#h1-hello-surname", 4, 75, 1);
        // $(document).matrix("#h2-hello", 2, 90);
    });

    // ABOUT START
    setTimeout(function() {
        $(document).matrix("#about-tag", 10, 75);
        $(document).matrix("#contacts-tag", 7, 75);
        $(document).matrix("#email_contact", 7, 75);
        $(document).matrix("#github_contact", 7, 75);
        $(document).matrix("#linkedin_contact", 7, 75);
    }, number + 100);

    let about_tag_text = $("#about-tag").html();
    let contacts_tag_text = $("#contacts-tag").html();
    let email_contact_text = $("#email_contact").html();
    let github_contact_text = $("#github_contact").html();
    let linkedin_contact_text = $("#linkedin_contact").html();

    $("#a-link").click(function() {
        $("#about-tag").html(about_tag_text);
        $(document).matrix("#about-tag", 7, 40);

        $("#contacts-tag").html(contacts_tag_text);
        $(document).matrix("#contacts-tag", 7, 40);

        $("#email_contact").html(email_contact_text);
        $(document).matrix("#email_contact", 7, 60);

        $("#github_contact").html(github_contact_text);
        $(document).matrix("#github_contact", 7, 60);

        $("#linkedin_contact").html(linkedin_contact_text);
        $(document).matrix("#linkedin_contact", 7, 60);
    });

});