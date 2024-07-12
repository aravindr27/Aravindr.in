// Header Scroll color change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);
  });


//   Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// remove onclick menu-icon
window.onscroll = () =>{
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
  })


  sr.reveal('.home-content',{delay:'110'})
  sr.reveal('.heading',{delay:'120'})
  sr.reveal('.aboutme-img',{origin: 'left', delay:'250'})
  sr.reveal('.aboutme-content .title1,.aboutme-content h4',{origin: 'right', delay:'300'})
  sr.reveal('.skills-container .box',{delay:'220',interval:150})
  sr.reveal('.aboutme-content .title',{delay:'120',interval:150})
  sr.reveal('.heading1',{delay:'120'})
  sr.reveal('.projects-box',{delay:'300',interval:150})
  sr.reveal('.heading2',{origin: 'left', delay:'300'})
  sr.reveal('.input-box,textarea,.contact form .btn',{origin: 'right', delay:'250'})
  sr.reveal('.main',{delay:'120'})
  sr.reveal('.copyright',{delay:'300',interval:150})
