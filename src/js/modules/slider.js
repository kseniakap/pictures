const slider = (slides, direction, prevArrow, nextArrow) => {
  let slideIndex = 1,
    paused = false;
  //при наведение на слайдер, автоматическое переключение слайдов останавливливается
  const allSlides = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > allSlides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = allSlides.length;
    }
    allSlides.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    allSlides[slideIndex - 1].style.display = "block";
  }
  showSlides(slideIndex);

  function changeNumSlides(n) {
    showSlides((slideIndex += n));
  }

  //Рассмотрен способ, если кнопки на слайдере не потребуются
  try {
    const prevBtn = document.querySelector(prevArrow),
      nextBtn = document.querySelector(nextArrow);

    prevBtn.addEventListener("click", () => {
      changeNumSlides(-1);
      allSlides[slideIndex - 1].classList.add("slideInLeft");
      //классы взяты из animate.css
      allSlides[slideIndex - 1].classList.remove("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      changeNumSlides(1);

      allSlides[slideIndex - 1].classList.remove("slideInLeft");
      allSlides[slideIndex - 1].classList.add("slideInRight");
    });
  } catch (e) {}

  function activateAnimation() {
    if (direction == "vertical") {
      paused = setInterval(function () {
        changeNumSlides(1);
        allSlides[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(function () {
        changeNumSlides(1);
        allSlides[slideIndex - 1].classList.remove("slideInLeft");
        allSlides[slideIndex - 1].classList.add("slideInRight");
      }, 3000);
    }
  }
  activateAnimation();

  allSlides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  allSlides[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};
export default slider;
