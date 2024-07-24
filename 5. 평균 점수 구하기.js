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
  return result;
}

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function changeScore(scores) {
  let newScores = new Array(scores.length);
  for(let i = 0; i < scores.length; i++) {
    newScores[i] = isCal(scores[i], "+", 3);
  }
  return newScores;
}

console.log(changeScore(scores));
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]