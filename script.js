
// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,      // Animation duration (in ms)
  once: true,          // Whether animation should happen only once
  easing: 'ease-in-out' // Animation easing
});


const menu = document.querySelector(".bx-menu");
const dropdown=document.querySelector(".drop-down")
const cross = document.querySelector(".cross");

menu.addEventListener("click", function () {
 
    dropdown.style.display = "block";
    menu.style.display="none"
  

});


cross.addEventListener("click", function () {
  
  dropdown.style.display = "none";
    menu.style.display="block"

});


 const form = document.getElementById('contact-form');

  form.addEventListener('submit', function () {
    // Let Formsbold do its work first, then clear the form
    setTimeout(() => {
      form.reset(); // 💖 Clears the inputs after submission
    }, 100); // Give it a tiny delay so submission isn't interrupted
  });

// Hey browser, listen for any click anywhere on the page.
   document.addEventListener("click", function (e) {
    // Check if the click was outside the form
    if (!form.contains(e.target)) {
      // Check if form has any non-empty input
      const hasValue = Array.from(form.elements).some(input => {
        return input.value && input.type !== "submit";
      });

      // If form has input, clear it
      if (hasValue) {
        form.reset();
      }
    }
  });