/**
 * 10.9.1 프로퍼티 축약 표현
 * -> 객체 리터럴의 프로퍼티는 프로퍼티 키와 프로퍼티 값으로 구성된다. 프로퍼티 값은 변수에 할당된 값.
 *     즉 식별자 표현식 일 수 있다.
 */

//ES5
var x = 1, y = 2;
var obj = {
    x: x, y:y
};
console.log(obj)

//ES6
let x1 = 1, y1 = 2;
const obj1 = {x1, y1};
console.log(obj)