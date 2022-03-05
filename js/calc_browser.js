import { CALC_UI } from './view.js';
CALC_UI.calcOutput.textContent = "0";
let operator, num1, num2;
function clearData() {
  operator = "";
  num1 = "";
  num2 = "";
}
clearData();


let result = "";
let is_first_symbol = true;
// для гита коммит

function Calc(op, num1, num2) {
	let operations = {
		'sum': num1 + num2,
		'sub': num1 - num2,
		'multi': num1 * num2,
		'div': (num2 !== 0) ? (num1 / num2) : "ERR",
	}
	return result = operations[op];
}



for (let btnNumber of CALC_UI.btnsNumber) {
	btnNumber.addEventListener('click', function (event) {
		const btnValue = event.target.textContent;
		if ((CALC_UI.calcOutput.textContent === "0") || (is_first_symbol === true) || (CALC_UI.calcOutput.textContent === "ERR")) {
			CALC_UI.calcOutput.textContent = btnValue;
		} else {
			CALC_UI.calcOutput.textContent += btnValue;
		}
		is_first_symbol = false;

	})

}
CALC_UI.btnClear.addEventListener('click', function () {
	CALC_UI.calcOutput.textContent = "0";
	clearData();
	is_first_symbol = true;
})

CALC_UI.btnBackSpace.addEventListener('click', function () {
	let resultTemp = CALC_UI.calcOutput.textContent;
	if (resultTemp.length === 1 || resultTemp === "0") {
		resultTemp = "0"
	} else {
		resultTemp = resultTemp.substr(0, resultTemp.length - 1);
	}
	CALC_UI.calcOutput.textContent = resultTemp;
})


for (let btnOperator of CALC_UI.btnsOperator) {
	btnOperator.addEventListener('click', function (event) {
		if (CALC_UI.calcOutput.textContent === "ERR") {
			alert("Операция невозможна");
			CALC_UI.calcOutput.textContent = "0";
			clearData();
		} else if (operator !== "") {
			num2 = +calcOutput.textContent
			num1 = Calc(operator, num1, num2);
			operator = event.target.id;
			CALC_UI.calcOutput.textContent = num1;
		} else {
			num1 = +CALC_UI.calcOutput.textContent;
			operator = event.target.id;
		}
		is_first_symbol = true;
	})
}

CALC_UI.btnEquals.addEventListener('click', function () {
	if (operator !== "") {
		num2 = +CALC_UI.calcOutput.textContent;
		Calc(operator, num1, num2);
		CALC_UI.calcOutput.textContent = result;
		operator = "";
		num1 = "";
		is_first_symbol = true;
	} else {
		alert("Выберите математическое действие")
	}
})