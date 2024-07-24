//1. 
let uninitialized;
console.log(uninitialized); // undefined
/*
  let타입으로 uninitialized를 선언하였으나
  = 식별자로 초기값을 설정하지 않아서 
  값이 없다는 undefined가 출력된다
*/

// 2. 
const apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
/*
  let이나 var로 변수를 만들면 이후 값을 재설정 할 수 있다
  하지만 값 재설정 시 Error를 만들어야 하므로
  상수를 만드는 const로 지정하였다
*/


// 3. 
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 19
/*
  lotto라는 배열을 생성하고 lotto의 인덱스 3에 접근하려고 한다
  배열의 인덱스는 0부터 시작하기 때문에 lotto[3]의 값은 19이다
  그래서 console.log(19)를 수행하게 된다
*/


// 4. 
let mySchedule = "";
console.log(mySchedule || false); // false
/*
  Javascript에서 빈 문자열은 false로 인식된다
  따라서, false or false는 or 연산자에 true값이 하나도 없기 때문에 false를 반환한다
*/
console.log(!!mySchedule); // false
/*
  !연산자는 not이다
  mySchedule은 false인데
  !를 2번 수행하기 때문에
  not에 not을 연산한 것이기 때문에 원래 값인 false를 반환한다
*/
