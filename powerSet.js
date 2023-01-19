const Subsets = (nums) => {
  const result = [];
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

console.log(Math.pow(2, 4));
