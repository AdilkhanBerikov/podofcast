const scrollWrapper = document.querySelector('.scroll-wrapper'); // Контейнер с прокруткой
const scrollButtons = document.querySelectorAll('.scroll');
// const scrollLeftButton = document.querySelector('.scroll-left'); // Кнопка "Назад"
// const scrollRightButton = document.querySelector('.scroll-right'); // Кнопка "Вперёд"

// Задаём шаг прокрутки
// const scrollStep = 590; // Количество пикселей для прокрутки за раз

scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('-left')) {
            scrollWrapper.scrollBy({
                left: -590, // Прокрутка влево
                behavior: 'smooth',
            });
        } else if (button.classList.contains('-right')) {
            scrollWrapper.scrollBy({
                left: 590, // Прокрутка вправо
                behavior: 'smooth',
            });
        }
    });
});

// // Обработчик для кнопки "Назад"
// scrollLeftButton.addEventListener('click', () => {
//     scrollWrapper.scrollBy({
//         left: -scrollStep, // Прокрутка влево
//         behavior: 'smooth', // Плавная прокрутка
//     });
// });
//
// // Обработчик для кнопки "Вперёд"
// scrollRightButton.addEventListener('click', () => {
//     scrollWrapper.scrollBy({
//         left: scrollStep, // Прокрутка вправо
//         behavior: 'smooth', // Плавная прокрутка
//     });
// });