const A = ["{", "(", "(", ")", "[", "]"];

const arrayCheck = (A) => {
  for (let i = 0; i < A.length; i += 2) {
    if (
      (A[i] === "{" && A[i + 1] === "}") ||
      (A[i] === "(" && A[i + 1] === ")") ||
      (A[i] === "[" && A[i + 1] === "]")
    ) {
      return "valid";
    } else {
      return "not valid";
    }
  }
};

console.log(arrayCheck(A));
