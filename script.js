// Smooth scroll (already working)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== NAVBAR TOGGLE (SINGLE SOURCE OF TRUTH) =====
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".menu-overlay");
  const menuToggle = document.querySelector(".menu-toggle");

  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

// ☰ <-> ✖ icon toggle
if (navLinks.classList.contains("active")) {
  menuToggle.textContent = "✖";
  menuToggle.classList.add("open");    // menu open → green cross
} else {
  menuToggle.textContent = "☰";
  menuToggle.classList.remove("open"); // menu close → normal icon
}


// Overlay click = menu close
document.querySelector(".menu-overlay").addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".menu-overlay");
  const menuToggle = document.querySelector(".menu-toggle");

  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.textContent = "☰";
});
