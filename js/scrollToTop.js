/* Кнопка скролла наверх страницы */

// Находим кнопку по id scrollToTopBtn
const scrollButton = document.querySelector('#scrollToTopBtn');

// Слушаем событие скролла на странице
window.addEventListener('scroll', function(){
	// console.log('Scroll!!!');
	// console.log('window.innerHeight', window.innerHeight);
	// console.log('window.pageYOffset', window.pageYOffset);

	// Если пользователь проскролил страницу по высоте больше чем высота экрана
	if (window.pageYOffset > window.innerHeight) {
		// Тогда к кнопке добавляем класс top-link--visible чтобы отобразить её
		scrollButton.classList.add('top-link--visible');
	} else {
		scrollButton.classList.remove('top-link--visible');
	}
})