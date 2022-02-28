addEventListener("DOMContentLoaded", Calc);

let num1, num2, operator;
let outputValue = "1234";
document.querySelector('.calc__output').textContent = outputValue;


Calc() {
	let numbers = document.querySelectorAll('.number');
	for (let number of numbers) {
		number.addEventListener('click', function {
			outputValue = outputValue + number.textContent;
		})

	})
}


let operations = {
	'sum': num1 + num2,
	'sub': num1 - num2,
	'multi': num1 * num2,
	'div': (num2 !== 0) ? num1 / num2 : "Error",
}



