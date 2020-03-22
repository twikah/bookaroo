require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import AOS from 'aos';

AOS.init();

// Change background color on home page
// const serviceSections = document.querySelectorAll('.service-section');
// const colors = ['#FAF9F6', '#CF5C36']

// console.log('here', serviceSections)
// window.addEventListener('scroll', (event) => {
//   const scrollFromTop = window.pageYOffset;

//   for (let i = 0; i < serviceSections.length; i++) {
//     const sectionBottom = serviceSections[i].offsetTop + serviceSections[i].offsetHeight * 0.6

//     console.log('and here', i, scrollFromTop, 'lol', sectionBottom)

//     if (scrollFromTop <= sectionBottom) {
//       document.querySelector('body').style.backgroundColor =
//         colors[i % colors.length];
//       break;
//     }
//   }
// })
