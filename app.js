var riddle = {
	question: 'Висит груша нельзя скушать',
	correctAnswer: 'лампочка',
	hints: ['это несъедобное', 'это не фрукт'],
	tries: 3,
	checkAnswer(answer) {
		// TODO: написать логику проверки правильного ответа
		// alert для пользователя, console.log()
		if (this.tries === 0) return alert('Игра окончена');
		const reg = new RegExp(this.correctAnswer, 'ig');
		if (reg.test(answer)) {
			console.log('Правильный ответ');
			alert('Правильный ответ!');
			this.tries = 0;
		} else {
			this.tries--;
			alert('Неправильный ответ');
			if (this.tries) {
				alert('Подсказка: ' + this.hints[this.tries - 1]);
			} else {
				alert('Попыток не осталось, правильный ответ: ' + this.correctAnswer);
			}
		}
	},
};

window.onload = function () {
	document.getElementById('riddle').innerText = riddle.question;
};

function check() {
	var input = document.getElementsByTagName('input')[0];

	var guessedAnswer = input.value;

	if (guessedAnswer) {
		// TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
		riddle.checkAnswer(guessedAnswer);
	}
}
