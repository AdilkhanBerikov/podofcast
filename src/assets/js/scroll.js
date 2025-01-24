const scrollWrapper = document.querySelector('.scroll-wrapper'); // Контейнер с прокруткой
const scrollLeftButton = document.querySelector('.scroll-left'); // Кнопка "Назад"
const scrollRightButton = document.querySelector('.scroll-right'); // Кнопка "Вперёд"

// Задаём шаг прокрутки
const scrollStep = 590; // Количество пикселей для прокрутки за раз

// Обработчик для кнопки "Назад"
scrollLeftButton.addEventListener('click', () => {
    scrollWrapper.scrollBy({
        left: -scrollStep, // Прокрутка влево
        behavior: 'smooth', // Плавная прокрутка
    });
});

// Обработчик для кнопки "Вперёд"
scrollRightButton.addEventListener('click', () => {
    scrollWrapper.scrollBy({
        left: scrollStep, // Прокрутка вправо
        behavior: 'smooth', // Плавная прокрутка
    });
});