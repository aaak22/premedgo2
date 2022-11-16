// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
  scrollFunction();
};

// Get the button:
const mybutton = document.querySelector('.scrollTopBtn');

function scrollFunction() {
  console.log('working 1');
  console.log(mybutton);
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    console.log('working 2');
  } else {
    mybutton.style.display = "none";
    console.log('working 3');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: false,
  wrapAround: true,
  fullscreen: true,
  prevNextButtons: false,
  prevPrevButtons: false,
});

const sectionsList = document.querySelectorAll(".privacyParas");
const navLi = document.querySelectorAll(".paralinkWrapper .privacyLink");

window.onscroll = () => {
  var current = "";

  sectionsList.forEach((section) => {
    console.log(sectionsList);
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  // const navLinks = document.querySelectorAll('.nav-item')
  // const menuToggle = document.getElementById('navbarSupportedContent')
  // const bsCollapse = new bootstrap.Collapse(menuToggle)
  // navLinks.forEach((l) => {
  //     l.addEventListener('click', () => { bsCollapse.toggle() })
  // })
};
