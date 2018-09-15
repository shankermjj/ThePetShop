$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
$("#mycarousel").carousel( { interval: 2000 } );
$("#carousel-pause").click(function(){
    $("#mycarousel").carousel('pause');
});
$("#carousel-play").click(function(){
    $("#mycarousel").carousel('cycle');
});
});

$("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });


    function myMap() {
      var mapCanvas = document.getElementById("map");
      var mapOptions = {
        center: new google.maps.LatLng( 17.393505,78.4935003), zoom: 10
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
    }
