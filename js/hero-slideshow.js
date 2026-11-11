(function () {
  var slideshow = document.querySelector("[data-hero-slideshow]");

  if (!slideshow) {
    return;
  }

  var slides = Array.prototype.slice.call(slideshow.querySelectorAll(".hero-slide"));
  var dots = Array.prototype.slice.call(slideshow.querySelectorAll(".hero-slide-dot"));
  var caption = slideshow.querySelector("[data-slide-caption-current]");
  var title = slideshow.querySelector("[data-slide-title-current]");
  var toggle = slideshow.querySelector(".hero-slide-toggle");
  var toggleIcon = slideshow.querySelector(".hero-slide-toggle-icon");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var activeIndex = 0;
  var timer = null;
  var userPaused = reducedMotion.matches;

  function showSlide(index) {
    activeIndex = index;

    slides.forEach(function (slide, slideIndex) {
      var isActive = slideIndex === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      slide.setAttribute("aria-label", (slideIndex + 1) + " of " + slides.length);
      dots[slideIndex].classList.toggle("is-active", isActive);
      dots[slideIndex].setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    caption.textContent = slides[activeIndex].getAttribute("data-slide-caption");
    title.textContent = slides[activeIndex].getAttribute("data-slide-title");
  }

  function stopTimer() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function startTimer() {
    stopTimer();

    if (userPaused || document.hidden) {
      return;
    }

    timer = window.setInterval(function () {
      showSlide((activeIndex + 1) % slides.length);
    }, 5500);
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      showSlide(index);
      startTimer();
    });
  });

  toggle.addEventListener("click", function () {
    userPaused = !userPaused;
    toggle.setAttribute("aria-pressed", userPaused ? "true" : "false");
    toggle.setAttribute("aria-label", userPaused ? "Play slideshow" : "Pause slideshow");
    toggleIcon.textContent = userPaused ? "▶" : "Ⅱ";
    startTimer();
  });

  document.addEventListener("visibilitychange", startTimer);
  reducedMotion.addEventListener("change", function (event) {
    userPaused = event.matches;
    toggle.setAttribute("aria-pressed", userPaused ? "true" : "false");
    toggle.setAttribute("aria-label", userPaused ? "Play slideshow" : "Pause slideshow");
    toggleIcon.textContent = userPaused ? "▶" : "Ⅱ";
    startTimer();
  });

  showSlide(0);
  startTimer();
}());
