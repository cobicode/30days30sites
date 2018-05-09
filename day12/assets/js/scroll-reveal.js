window.sr = ScrollReveal();
sr.reveal('.navbar');
sr.reveal('.header-content-left', {
  duration: 2000,
  origin: "left",
  distance: "300px"
});
sr.reveal('.header-content-right', {
  duration: 2500,
  origin: "right",
  distance: "300px"
});
sr.reveal('.header-btn', {
  duration: 2000,
  origin: "bottom",
  delay: 1000
});
sr.reveal('#testimonial', {
  duration: 2000,
  origin: "left",
});
sr.reveal('#info-one', {
  duration: 2000,
  origin: "left",
});

// Smooth Reveal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});