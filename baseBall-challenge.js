input_ops = ["5", "2", "4", "C", "D", "+"];

const chaFunc = () => {
  let X = [];
  for (let i = 0; i < input_ops.length; i++) {
    if (input_ops[i] === "C") {
      X.pop();
    } else if (input_ops[i] === "D") {
      X.push(X.reduce((a, b) => a + b));
    } else if (input_ops[i] === "+") {
      X.push(Number(X[X.length - 1] + X[X.length - 2]));
    } else {
      X.push(Number(input_ops[i]));
    }
  }
  return X.reduce((a, b) => a + b);
};

console.log(chaFunc());
