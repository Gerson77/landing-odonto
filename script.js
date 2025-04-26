const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  allowTouchMove: true,
  grabCursor: true,
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  spaceBetween: 24,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  allowTouchMove: true,
  grabCursor: true,
});

const mapa = L.map("mapa", {
  zoomControl: false,
  dragging: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false,
  tap: false,
  touchZoom: false,
}).setView([-7.1464312, -34.9639985], 15);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 19,
}).addTo(mapa);


function initResponsiveNav() {
  const iconToggle = document.querySelector(".toggle_icon");
  const navBar = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu_link");
  const iconClose = document.querySelector(".close_icon");

  if (!iconToggle || !navBar || !iconClose) {
    console.error("Elementos de navegação não encontrados no DOM.");
    return;
  }

  iconToggle.addEventListener("click", () => navBar.classList.toggle("active"));
  iconClose.addEventListener("click", () => navBar.classList.remove("active"));

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", () => navBar.classList.remove("active"));
  });
}
initResponsiveNav();



function scrollHeader() {
  const header = document.getElementById("header");
  const menuLinks = document.querySelectorAll(".menu_link");

  if (window.scrollY >= 40) {
    header.classList.add("active");
    menuLinks.forEach(link => link.style.color = "#fff");
  } else {
    header.classList.remove("active");
    menuLinks.forEach(link => link.style.color = "");
  }
}
window.addEventListener("scroll", scrollHeader);