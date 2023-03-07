$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><img src='./images//eva_arrow-back-fill.svg' alt='' /></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><img src='./images//eva_arrow-back-fill1.svg' alt='' /></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows : false
      },
    }
  
  ],
});
const toggle = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu")
const activeClass = "is-show"
toggle.addEventListener("click", () => {
  menu.classList.add(activeClass)
})

window.addEventListener('click', function(e){   
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
    menu.classList.remove(activeClass)
  }
});