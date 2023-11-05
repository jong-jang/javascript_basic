/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log('--------------');

const infinity = Infinity;
const ninfinity = -Infinity;
console.log(typeof Infinity);
console.log(typeof Infinity);
console.log('--------------');

/**
 * String 타입
 */
const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유지";
console.log(ive);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력하면된다.
 *
 */
const iveYujin = '아이브\n안유진';
console.log(iveYujin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);

const iveWonYoung2 = `아이브i ''' ////////// 장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(groupName + '안유진');
console.log(`${groupName} 안유진`);
console.log('---------------------');

/**
 * Boolean 타입
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값이다.
 *
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init);
