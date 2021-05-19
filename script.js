// Assigment 3

// 1. a button that will show eather a sidebar or a dropbownbar and another button that will show a modal
// 2. and another button that will show a modal and when clicked on the submitbutton

// 1. start with button for the navigation and it should hide when clicked again try if i can do it with onClick
//
//

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

// dropdown-btn

// dropdown-menu

// id = mybtn

// id="" mymodal

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// hamburger och menu

const btn_nav = document.querySelector(".btn_nav");
const menu = document.querySelector(".menu");

btn_nav.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target === menu) {
    menu.style.display = "none";
  }
};

// --------------------------------------------------------------------

// Get the modal
const modal = document.getElementById("myModal"); // id är det oranga

// Get the button thats open the moddal
const openBtn = document.getElementById("modalBtn"); // id är det oranga

// Get the span element that close the modal
const span = document.getElementsByClassName("close")[0];

// when the user clicks the on  open the modal
openBtn.onclick = function () {
  modal.style.display = "block";
};

// when the user clicks the on span, close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// when the user clicks anywer outside the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// button for modal

// const  = document.querySelector(".");
// const  = document.querySelector(".");

// btn.addEventListener("click", () => {
//   if (.style.display === "none") {
//     .style.display = "block";
//   } else {
//     .style.display = "none";
//   }
// });
