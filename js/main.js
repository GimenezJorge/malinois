document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav_links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
