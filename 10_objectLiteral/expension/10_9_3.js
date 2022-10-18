/**
 * 메서드 축약 표현 (function 생략)
 */

// ES5
var es5_obj = {
    name : "Lee",
    sayHi : function () {
        console.log("Hi!" + this.name);
    }
};
es5_obj.sayHi();

//ES6
const es6_obj = {
    name : "Lee",
    sayHi() {
        console.log("Hi!" + this.name);
    }
};
es6_obj.sayHi();