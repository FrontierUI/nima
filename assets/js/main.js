// header navigation menu

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');
var fullWidthMenu = document.getElementById('fullWidthMenu');

function handleClick() {
  if (
    collapseMenu.style.display === 'block' ||
    fullWidthMenu.style.display === 'block'
  ) {
    collapseMenu.style.display = 'none';
    fullWidthMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
    fullWidthMenu.style.display = 'block';
  }
}
toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

/* Open the sidenav */
function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

//

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
  menu.classList.add('menu-active');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('menu-active');
});

// sliders

$('.treatSlider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
});

$('.conditionSlider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
});
