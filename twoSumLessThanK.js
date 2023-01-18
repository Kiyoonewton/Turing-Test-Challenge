const A = [34, 23, 1, 24, 75, 33, 54, 8];

const K = 60;

const twoSumLessThanK = function (A, K) {
  let results = null;

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] + A[j] < K && results < A[i] + A[j]) {
        results = A[i] + A[j];
      }
    }
  }

  if (results > 0) {
    return results;
  } else {
    return -1;
  }
};

console.log(twoSumLessThanK(A, K));
