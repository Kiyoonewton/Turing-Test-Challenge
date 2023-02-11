const input_Str = "red2 blue5 black4 green1 gold3";

const inputStr = () => {
  const dataObj = {};
  const splitInput = input_Str.split(" ");
  for (let i = 0; i < splitInput.length; i++) {
    const str = splitInput[i];
    const strNum = str[str?.length - 1];
    const strNu = str.split(strNum)[0];
    dataObj[strNum - 1] = strNu;
  }
  return JSON.stringify(Object.values(dataObj).join(" "));
};

console.log(inputStr());
