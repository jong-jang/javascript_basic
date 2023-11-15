/**
 * Scope
 */

var numberOne = 20;

function levelOne() {
	console.log(numberOne);
}

// levelOne();

function levelOne() {
	var numberOne = 40;

	console.log(numberOne);
}

// levelOne();

console.log(numberOne);

function levelOne() {
	var numberOne = 40;
	function levelTwo() {
		var numberTwo = 99;
		console.log(`levelTwo numberTwo : ${numberTwo}`);
		console.log(`levelTwo numberOne : ${numberOne}`);
	}

	levelTwo();
	console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);

/**
 * JS -> Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 *
 * 실행한 위치가 상위 스코프를 정한다
 *
 */
var numberThree = 3;

function functionOne() {
	var numberThree = 100;

	functionTwo();
}

function functionTwo() {
	console.log(numberThree);
}

functionOne();
