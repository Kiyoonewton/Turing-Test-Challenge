const generateParenthesis = (n) => {
  const result = [];
  const backtrack = (left, right, current) => {
    if (left === 0 && right === 0) {
      result.push(current);
      return;
    }
    if (left > 0) {
      backtrack(left - 1, right, current + "(");
    }
    if (right > left) {
      backtrack(left, right - 1, current + ")");
    }
  };
  backtrack(n, n, "");
  return result;
};

console.log(generateParenthesis(2));
