var msg = 'hello';
// msg = 1 error 타입 불일치
var val = 1;
var nuallableStr = null; // 변수 하나의 타입을 n개 지정한다.
nuallableStr = 'hi';
// nuallableStr = undefined , typescript는 개발단계에서 error를 미리 걸러준다.
var undefinedOrNumber;
undefinedOrNumber = 10;
undefinedOrNumber = undefined;
var numberOrStringOrNull = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;
var isCompleted = true;
isCompleted = false;
// isCompleted = 0
var anyValue = null;
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';
//
var a = 1; // 컴파일러가 자동으로 타입을 추측한다.
var b = 'b';
var c = true;
