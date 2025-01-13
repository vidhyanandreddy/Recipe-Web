let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};


let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let tops = window.scrollY;
    let heigth = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    // if ((tops) => offset && tops < offset + heigth) {
    //   navLinks.forEach((links) => {
    //     links.classList.remove("active");
    //     document.querySelector("header .navbar a[href*=" + id + "]").classList.add("active");
    //   });
    // }
  });
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPreView: 1,
    },
    640: {
      slidesPreView: 2,
    },
    768: {
      slidesPreView: 2,
    },
    1024: {
      slidesPreView: 3,
    },
  },
});



