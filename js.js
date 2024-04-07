/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Создаю чек-лист. Делаю тест-кейс. Создаю баг-репорт. Владею Postman, Kebana ')
})