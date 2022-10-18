/**
 * 10.9.2 계산된 프로퍼티 이름
 * -> ES5에서 계산된 프로퍼티 이름으로 키를 동적으로 생성하려면 객체 리터럴 외부에서 대괄호([..]) 표기법을 사용해야 한다.
 * -> ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 키를 동적 생성할 수 있다.
 */

//ES5
var es5_prefix = 'prop';
var es5_i = 0;
var es5_obj = {};

// 계산된 프로퍼티 이름으로 키 동적 생성
es5_obj[es5_prefix + '-' + ++es5_i] = es5_i;
es5_obj[es5_prefix + '-' + ++es5_i] = es5_i;
es5_obj[es5_prefix + '-' + ++es5_i] = es5_i;

console.log(es5_obj)




//ES6
const es6_prefix = 'prop';
let es6_i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 키를 동적 생성
const es6_obj = {
    [`${es6_prefix}-${++es6_i}`]: es6_i,
    [`${es6_prefix}-${++es6_i}`]: es6_i,
    [`${es6_prefix}-${++es6_i}`]: es6_i
};
console.log(es6_obj)