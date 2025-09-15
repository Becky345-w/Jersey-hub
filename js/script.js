// Hamburger Toggle
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Reveal Sections on Scroll
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Carousel Functionality
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const slideWidth = 270;
const totalSlides = track.children.length;

function moveNext() {
  const maxIndex = totalSlides - Math.floor(window.innerWidth / slideWidth);
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function movePrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);

// Auto-slide
setInterval(moveNext, 4000);
