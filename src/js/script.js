
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/chevron-left-solid.png" alt=""></img> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png" alt=""></img></button>',
        responsive: [
            {
              breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
              }}]
      });
  });