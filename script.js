let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.getElementById('slider');
  const navel = document.getElementById('navele');
  const alw = document.getElementById('always');

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
    updateDots();
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function menuView(){
    const head = document.getElementById('header');
    const ham = document.getElementById('hamburger');
    if(navel.style.visibility == 'hidden'){
      navel.style.visibility = 'visible';
      head.style.height = '350px';
      ham.style.transform = 'translateY(0px)';
    }
    else{
      navel.style.visibility = 'hidden';
      head.style.height = '80px';
      ham.style.transform = 'translateY(-42px)';
    }
  }

  setInterval(() => {
    nextSlide();
  }, 5000);



  //next

let customCurrentIndex = 0;
const customSlides = document.querySelectorAll('.custom-slide');
const customTotalSlides = customSlides.length;
const customSlider = document.getElementById('custom-slider');

function showCustomSlide(index) {
  if (index < 0) {
    customCurrentIndex = customTotalSlides - 1;
  } else if (index >= customTotalSlides) {
    customCurrentIndex = 0;
  } else {
    customCurrentIndex = index;
  }

  const customTranslateValue = -20 + 50 - customCurrentIndex * 50 + '%';
  customSlider.style.transform = 'translateX(' + customTranslateValue + ')';
}

function customNextSlide() {
  showCustomSlide(customCurrentIndex + 1);
}

function customPrevSlide() {
  showCustomSlide(customCurrentIndex - 1);
}

// customNextSlide(0);

// Automatic sliding every 5 seconds
setInterval(() => {
  customNextSlide();
}, 5000);
