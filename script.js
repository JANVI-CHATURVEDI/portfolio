
// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,      // Animation duration (in ms)
  once: true,          // Whether animation should happen only once
  easing: 'ease-in-out' // Animation easing
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














const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";

function jumbleTextEffect(element, duration = 10) {
  const originalText = element.dataset.original || element.textContent;
  element.dataset.original = originalText;

  let iterations = 0;
  const interval = setInterval(() => {
    element.textContent = originalText
      .split("")
      .map((char, i) => {
        if (i < iterations) return originalText[i];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }

    iterations += 1 / 2; // adjust speed
  }, 30);
}

// Run the effect for all .jumble elements on page load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".jumble").forEach((el) => {
    jumbleTextEffect(el);
  });
});
