document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.slider-track');
  const cards = document.querySelectorAll('.nabor-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const dotsContainer = document.querySelector('.slider-dots');

  let currentIndex = 0;

  // Рассчитываем количество видимых карточек в зависимости от ширины экрана
  function getVisibleCardsCount() {
    if (window.innerWidth > 992) return 3;
    if (window.innerWidth > 650) return 2;
    return 1;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCardsCount());
  }

  // Создаем динамические точки навигации
  function createDots() {
    dotsContainer.innerHTML = '';
    const maxDots = getMaxIndex() + 1;
    
    for (let i = 0; i < maxDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  // Функция обновления позиции слайдера
  function updateSlider() {
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseInt(window.getComputedStyle(track).gap) || 0;
    
    // Сдвиг трека
    const moveAmount = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${moveAmount}px)`;

    // Обновление состояния точек
    document.querySelectorAll('.dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  // События кнопок управления
  nextBtn.addEventListener('click', () => {
    if (currentIndex < getMaxIndex()) {
      currentIndex++;
    } else {
      currentIndex = 0; // Зацикливание (возврат к началу)
    }
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = getMaxIndex(); // Переход к концу
    }
    updateSlider();
  });

  // Поддержка свайпов на мобильных устройствах
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) { // Минимальная дистанция свайпа
      if (diff > 0 && currentIndex < getMaxIndex()) {
        currentIndex++;
      } else if (diff < 0 && currentIndex > 0) {
        currentIndex--;
      }
      updateSlider();
    }
    isDragging = false;
  });

  // Пересчет при изменении размеров экрана
  window.addEventListener('resize', () => {
    createDots();
    updateSlider();
  });

  // Инициализация
  createDots();
  updateSlider();
});
