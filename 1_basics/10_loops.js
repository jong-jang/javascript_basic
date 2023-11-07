/**
 * for...in
 * 객체사용시 key 값을 가져온다
 * array에 사용시 index값을 가져온다
 */

const Yujin = {
	name: '안유진',
	year: 2003,
	group: '아이브',
};

for (let key in Yujin) {
	console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for (let key in iveMembersArray) {
	console.log(`${key}:${iveMembersArray[key]}`);
}

/**
 * for...of
 * array에 사용시 값을 가져온다
 */

console.log('-----------------');
for (let value of iveMembersArray) {
	console.log(value);
}

/**
 * while
 * 조건이 맞으면 계속 실행
 */

console.log('---------------');
let number = 0;
while (number < 10) {
	number++;
}
console.log(number);

/**
 * do...while
 * 무조건 한번 실행 잘 안씀..
 * 알고만 있자
 */

/**
 * break
 * loop를 종료시킨다.
 */
console.log('-----------');
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		break;
	}
	console.log(i);
}

/**
 * continue
 * 해당 라인에서 종료하고 다음 루프부터 다시
 */

console.log('-------------');
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		continue;
	}
	console.log(i);
}
