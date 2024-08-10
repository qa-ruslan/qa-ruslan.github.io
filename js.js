/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	const link = document.createElement('a');
	link.href = './cv.pdf'; // Укажите путь к вашему файлу
	link.download = 'cv.pdf'; // Имя файла для скачивания
	link.click();
})