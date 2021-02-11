$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        loop:true,
        margin:20,
        responsive:{
            200:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:4
            }
        }
    });
  });