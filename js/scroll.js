const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight + 0.5;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add("ativo");
    }
  });
}
animaScroll();
window.addEventListener("scroll", animaScroll);
