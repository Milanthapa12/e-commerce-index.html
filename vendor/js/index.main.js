
const nextIcon = '<i class="fas fa-chevron-right"></i>';
const prevIcon = '<i class="fas fa-chevron-left"></i>';

$('.best_selling_items').owlCarousel({
  loop:false,
  // autoplay: true,
  margin: 15,
  dots: false,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
    0:{
          items:2
      },
      // 480:{
      //   items: 2
      // },
      556:{
        items: 2
      },
      768:{
        items: 3
      },
      992:{
        items: 4
      },
      1200:{
          items:5
      }
  }
});

$('.brows-category').owlCarousel({
  loop:true,
  autoplay: true,
  margin: 15,
  dots: false,
  nav: true,
  navText: [
  prevIcon,
  nextIcon
],
  responsive:{
    0:{
          items:1
      },
      556:{
        items: 2
      },
      768:{
        items: 3
      },
      992:{
        items: 4
      },
      1200:{
          items:5
      }
  }
});  






  