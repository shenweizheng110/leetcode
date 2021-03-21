/*
 * @File: 150. 逆波兰表达式求值
 * @Author: shenweizheng110@github.com
 * @Date: 2021-03-20
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} operator
 */
const cal = (s1, s2, operator) => {
  const n1 = Number(s1), n2 = Number(s2);
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return ~~(n1 / n2)
  }
}

// solution1 递归
/**
 * @param {string[]} tokens
 * @return {number}
 */
/* var evalRPN = function (tokens) {
  if (tokens.length === 0) {
    return 0;
  }
  if (tokens.length === 1) {
    return tokens[0];
  }
  if (tokens.length === 3) {
    return cal(tokens[0], tokens[1], tokens[2])
  }
  const firstOperatorIdx = tokens.findIndex(token => Number.isNaN(Number(token)));
  tokens.splice(
    firstOperatorIdx - 2,
    3,
    cal(tokens[firstOperatorIdx - 2], tokens[firstOperatorIdx - 1], tokens[firstOperatorIdx])
  )

  return evalRPN(tokens)
}; */

// Solution2 O(n)
var evalRPN = function (tokens) {
  if (tokens.length === 0) {
    return 0;
  }
  if (tokens.length === 1) {
    return tokens[0];
  }
  let lastValidIdx = -1, validNums = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const num = Number(token);
    if (/^[\+\*\-\/]$/.test(token)) {
      const subRet = cal(validNums[lastValidIdx - 1], validNums[lastValidIdx], token)
      validNums[--lastValidIdx] = subRet;
      continue;
    }
    validNums[++lastValidIdx] = num;
  }
  return validNums[lastValidIdx];
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(["4","13","5","/","+"]))
