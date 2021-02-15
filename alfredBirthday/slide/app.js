var slides = document.querySelector(".slider-items").children;
var nextSlide = document.querySelector(".left-slide");
var prevSlide = document.querySelector(".rigth-slide");
var totalslides = slides.length;
console.log(totalslides);
var index = 0;
nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};


function next(direction) {
  if (direction == "next") {
    index = index + 1;
    if (index === totalslides) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = totalslides - 1;
    } else {
      index--;
    }
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
