// ✅ Scroll navbar effect: adds class when user scrolls down
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ✅ Optional: Responsive nav toggle (mobile menu)
   To use this, add a "menu toggle" icon in your HTML with id="menu-toggle"
   and apply the "active" class to nav-links when clicked.
*/

const toggleButton = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

