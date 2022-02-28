const calcOutput = document.querySelector('.calc__output');
calcOutput.textContent = "0";
let btnValue = "0";
const btnsNumber = document.querySelectorAll('.number');
const btnClear = document.querySelector('.clear');
const btnBackSpace = document.querySelector('.backspace');
const btnsOperator = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equals')
let num1 = "";
let num2 = "";
let operator = "";
let result = 0;




for (let btnNumber of btnsNumber) {
	btnNumber.addEventListener('click', function (event) {
		const btnValue = event.target.textContent;
		if ((calcOutput.textContent === "0") || (num1 === "" && operator === "")) {
			calcOutput.textContent = btnValue;
		} else {
			calcOutput.textContent += btnValue;
		}

	})

}
btnClear.addEventListener('click', function () {
	calcOutput.textContent = "0";
})

btnBackSpace.addEventListener('click', function () {
	let resultTemp = calcOutput.textContent;
	if (resultTemp.length === 1 || resultTemp === "0") {
		resultTemp = "0"
	} else {
		resultTemp = resultTemp.substr(0, resultTemp.length - 1);
	}
	calcOutput.textContent = resultTemp;
})


for (let btnOperator of btnsOperator) {
	btnOperator.addEventListener('click', function (event) {
		if (operator !== "") {
			num2 = + calcOutput.textContent
			num1 = operations[operator];
			operator = event.target.id;
			calcOutput.textContent = num1;
		} else {
			num1 = +calcOutput.textContent;
			operator = event.target.id;
		}

	})
}

btnEquals.addEventListener('click', function () {
	if (operator !== "") {
		num2 = +calcOutput.textContent;
		result = operations[operator];
		calcOutput.textContent = result;
		operator = "";
		num1 = result;
	} else {
		alert("Выберите математическое действие")
	}

})

let operations = {
	'sum': num1 + num2,
	'sub': num1 - num2,
	'multi': num1 * num2,
	'div': (num2 !== 0) ? num1 / num2 : "Err",
}



