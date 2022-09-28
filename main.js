const carousel = document.querySelector(".carousel");
const carouselItem = document.querySelectorAll(".carousel__item");
const prevBtn = document.querySelector(".carousel__prev");
const nextBtn = document.querySelector(".carousel__next");

let counter = 1;
carousel.style.transform = ` translateX(${-800 * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= carouselItem.length - 1) {
    return;
  }
  carousel.style.transition = "0.5s transform ease-in-out";
  counter++;
  carousel.style.transform = ` translateX(${-800 * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  }
  carousel.style.transition = "0.5s transform ease-in-out";
  counter--;
  carousel.style.transform = ` translateX(${-800 * counter}px)`;
});

carousel.addEventListener("transitionend", () => {
  if (carouselItem[counter].id === "lastClone") {
    carousel.style.transition = "none";
    counter = carouselItem.length - 2;
    carousel.style.transform = ` translateX(${-800 * counter}px)`;
  }
  if (carouselItem[counter].id === "firstClone") {
    carousel.style.transition = "none";
    counter = carouselItem.length - counter;
    carousel.style.transform = ` translateX(${-800 * counter}px)`;
  }
});
