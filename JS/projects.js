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

        $("#proj-button-row").show();

        setTimeout(function() {

            $("#project-page-proj-code").text(projects[currentProject]["code"]);
            $("#project-page-proj-code").show();
            $("#project-page-proj-code").addClass("proj-page-effect");
            $(document).matrix("#project-page-proj-code", 4, 75);

        }, 750);

        setTimeout(function() {

            $("#project-page-proj-name").text(projects[currentProject]["name"]);
            $("#project-page-proj-name").show();
            $("#project-page-proj-name").addClass("proj-page-effect");
            $(document).matrix("#project-page-proj-name", 4, 75);

        }, 750);

        setTimeout(function() {
            $("#project-page-proj-text").text(projects[currentProject]["desc"]);
            $("#project-page-proj-text").slideDown(1250);
        }, 2000);

        setTimeout(function() {
            $(".project-button").show();
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