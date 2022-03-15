const navShow = () => {
  const toggleButton = document.querySelector(".toggler");
  const navbar = document.querySelector(".navbar-links");
  const navbarLinks = document.querySelectorAll(".navbar-links li");

  toggleButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linkShow 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    toggleButton.classList.toggle("toggleMenu");
  });
};

navShow();
