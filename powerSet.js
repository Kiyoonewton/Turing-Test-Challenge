const Subsets = (nums) => {
  const result = [];

  //   let n = nums.length;
  //   let powSize = Math.pow(2, n);

  for (let i = 0; i < 2 ** nums.length; i++) {
    const val = [];
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) !== 0) {
        val.push(nums[j]);
      }
    }
    result.push("[" + val + "]");
  }
  return result;
};

console.log(Subsets([1, 2, 3]));
