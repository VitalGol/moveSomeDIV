(function () {
	window.addEventListener('load', init, false);

	function init() {
		var elem = document.getElementsByTagName('div');
		for (var key in elem) {
		elem[key].addEventListener('mousedown', function (e) {
			skip(this, e);
		});
		}
	}

	function skip(elemToSkip, event) {
		//координаты пeрвоначального клика
		var startX = event.clientX,
			startY = event.clientY;

		//начальные координаты элемента
		var origX = elemToSkip.offsetLeft,
			origY = elemToSkip.offsetTop;

		// разница между координатами мыши и элемента
		var deltaX = startX - origX,
			deltaY = startY - origY;

		//регистрация событий
		document.addEventListener('mousemove', moveHandler, true);
		document.addEventListener('mouseup', upHandler, true);

		function moveHandler(e) {
			if(!e) {
				e = window.event;
			}
			//перемещаем элемент
			elemToSkip.style.left = (e.clientX - deltaX) + 'px';
			elemToSkip.style.top = (e.clientY - deltaY) + 'px';
		}
		
		function upHandler(e) {
			if (!e) {
				e = window.event;
			}
			//фиксируем элемент и открепляем функции обработки
			document.removeEventListener('mousemove', moveHandler, true);
			document.removeEventListener('mouseup', upHandler, true);
		}
	}
})();