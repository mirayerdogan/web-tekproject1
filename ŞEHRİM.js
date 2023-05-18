const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide-container');

   let currentIndex = 0;

   function showSlide(index) {
       slides.forEach((slide, i) => {
           if (i === index) {
               slide.style.display = 'block';
           } else {
               slide.style.display = 'none';
           }
       });
   }

   function nextSlide() {
       currentIndex++;
       if (currentIndex >= slides.length) {
           currentIndex = 0;
       }
       showSlide(currentIndex);
   }

   function previousSlide() {
       currentIndex--;
       if (currentIndex < 0) {
           currentIndex = slides.length - 1;
       }
       showSlide(currentIndex);
   }

   showSlide(currentIndex);

   const prevButton = document.getElementById('prev-btn');
   const nextButton = document.getElementById('next-btn');

   prevButton.addEventListener('click', previousSlide);
   nextButton.addEventListener('click', nextSlide);

   var swiper = new Swiper('.slider-container', {
       slidesPerView: 1,
       spaceBetween: 10,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     });

     var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', function() {
 swiper.slidePrev();
});

nextBtn.addEventListener('click', function() {
 swiper.slideNext();
});


var sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('mouseenter', function() {
 swiper.autoplay.stop();
});

sliderContainer.addEventListener('mouseleave', function() {
 swiper.autoplay.start();
});