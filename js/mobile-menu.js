function menuMobile() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li");

  function animateLinks() {
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  function handleClick() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    animateLinks();
  }

  mobileMenu.addEventListener("click", handleClick);
}

menuMobile();
