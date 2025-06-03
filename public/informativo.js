const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let index = 1; // começa no slide 1, porque vamos clonar o último pra 0 e o primeiro pra final

// Clonar último e primeiro slide
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

const allSlides = document.querySelectorAll('.slide'); // agora tem 6 slides (4 orig + 2 clones)
const slideWidth = allSlides[0].clientWidth;

slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

// Próximo slide
function nextSlide() {
  if (index >= allSlides.length -1) return; // evita ir além do clone final
  index++;
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
}

// Slide anterior
function prevSlide() {
  if (index <= 0) return; // evita ir além do clone inicial
  index--;
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
}

// Quando a transição acabar, checar se estamos num clone
slidesContainer.addEventListener('transitionend', () => {
  if (allSlides[index].isSameNode(firstClone)) {
    slidesContainer.style.transition = 'none';
    index = 1;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (allSlides[index].isSameNode(lastClone)) {
    slidesContainer.style.transition = 'none';
    index = totalSlides;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

// Botões
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Slide automático
let slideInterval = setInterval(nextSlide, 3000);

// Pausar no hover (opcional)
document.querySelector('.slider').addEventListener('mouseenter', () => clearInterval(slideInterval));
document.querySelector('.slider').addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 3000));
