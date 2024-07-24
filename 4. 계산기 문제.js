function isCal(num1, operator, num2) {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      break;
  }
  console.log(result);
}

isCal(3, "+", 6); // 결과값 9
isCal(11, "-", 6); // 결과값 5
isCal(6, "*", 3); // 결과값 18
isCal(15, "/", 3); // 결과값 5