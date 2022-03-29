const navShow = () => {
  // hamburger variable
  const toggleButton = document.querySelector(".toggler");
  const navbarLinks = document.querySelector(".navbar-links");
  const navbarLinksLi = document.querySelectorAll(".navbar-links li");
  //accordian variable
  const accordian = document.querySelector(".accordian");
  const accordianItems = document.querySelectorAll(".accordian-item");
  const accordianAnswer = document.querySelector(".answer");

  // function for hamburger
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    navbarLinksLi.forEach((link, index) => {
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
  // function for accordian
  accordianItems.forEach((accordianItem) => {
    accordianItem.addEventListener("click", () => {
      accordianItem.classList.toggle("is-open");
    });
  });
  // window.addEventListener("scroll", () => {
  //   const navbarSticky = document.querySelector(".navbar");
  //   navbarSticky.classList.toggle("sticky", window.scrollY > 0);
  // });
};

navShow();
