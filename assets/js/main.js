// Navbar

const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('open-sidebar');
const collapseMenu = document.getElementById('collapseMenu');

openSidebarButton.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.toggle('-translate-x-full');
  setTimeout(() => {
    document.querySelector('body').classList.add('overflow-hidden');
  }, 50);
});

collapseMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.toggle('-translate-x-full');
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
    sidebar.classList.add('-translate-x-full');
  }
});

document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && !collapseMenu.contains(e.target)) {
    sidebar.classList.add('-translate-x-full');
  }
});

document.getElementById('btnClose').addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
  document.querySelector('body').classList.remove('overflow-hidden');
});

document.getElementById('btnSMClose').addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
  document.querySelector('body').classList.remove('overflow-hidden');
});

//
// Slickkks Sliders

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
