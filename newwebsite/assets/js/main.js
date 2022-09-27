// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

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