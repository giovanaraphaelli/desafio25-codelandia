function menuMobile() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li a");

  function closeNav() {
    function removeActive() {
      navList.classList.remove("active");
      mobileMenu.classList.remove("active");
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", removeActive);
    });
  }

  function handleClick() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    closeNav();
  }

  mobileMenu.addEventListener("click", handleClick);
}

menuMobile();
