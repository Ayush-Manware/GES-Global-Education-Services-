
let navul = document.getElementById('$nav')

function menuFunction(){
navul.classList.add('new-ul')
}
  
  
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  function showSlide(n) {
    slideIndex = (n + totalSlides) % totalSlides;
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  showSlide(slideIndex);


