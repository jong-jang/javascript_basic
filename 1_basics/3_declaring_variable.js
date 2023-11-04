/**
 * Variable 선언하기
 *
 * 1) var - 더 이상 쓰지 않는다.
 *
 */
var name = '이름';
console.log(name);

var age = 55;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var을 선언하면
 * 추후 값을 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '뉴진소';

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것
 * 2) 할당
 *
 * 선언만 하게 되면 undefined가 자동으로 할당된다.
 * let이나 var은 선언만 해도 나중에 값을 바꿀 수 있어서 괜찮다.
 * const는 값을 바꿀 수 없어서 undefined를 할당 받을 수 없다.
 */
