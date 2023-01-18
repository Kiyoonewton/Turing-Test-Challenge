class construct {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

const normalfunc = (arry) => {
  if (arry.length == 1 && arry[0] == null) {
    return null;
  }
  const newHead = new construct(arry[0]);

  return newHead;
};

normalfunc([6, 5, 4, 3, 9, 8]);
