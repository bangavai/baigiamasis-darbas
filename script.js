"use strict";

const burger = document.querySelector('#burger');
const links = document.querySelector('.links');
const anchors = links.querySelectorAll('a');

burger.addEventListener('click', function () {
    burger.classList.toggle("rotate");
    links.classList.toggle("show-nav");
});

for(const a of anchors) {
    a.addEventListener('click', function () {
    burger.classList.remove("rotate");
    links.classList.remove("show-nav");
    });
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


const tabs = document.querySelectorAll(".main-information");
const buttons = document.querySelectorAll(".tab");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].style.display = "none";
}

function showTab(e, id) {
  // Hide tabs
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  //Show selected tab
  document.getElementById(id).style.display = "block";
}
//   //Remove selected button styling from all buttons
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove("selected-button");
//   }

//   //Add selected button styling
//   e.currentTarget.classList.add("selected-button");
// }
