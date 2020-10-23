$(function() {
    $(".carousel").carousel( { interval: 1700, pause: "false" });
    $("#carouselButton").click(function(){
       if ($("#carouselButton").children("i").hasClass("fa-pause")) {
           $(".carousel").carousel("pause");
           $("#carouselButton").children("i").removeClass("fa-pause");
           $("#carouselButton").children("i").addClass("fa-play");
       } else {
           $(".carousel").carousel("cycle");
           $("#carouselButton").children("i").removeClass("fa-play");
           $("#carouselButton").children("i").addClass("fa-pause");
       }
    });
});

// TOOLTIPS 
 /* <script>
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script> */