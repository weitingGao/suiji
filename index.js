// 定义一个函数，接受三个参数：随机数个数n，下限min，上限max
function generateRandomNumbers(n, min, max) {
  // 创建一个空数组，用来存放随机数
  let randomNumbers = [];
  // 判断参数是否合法
  if (n < 1 || min > max) {
    // 如果不合法，返回一个错误信息
    return "Invalid parameters";
  }
  // 使用一个循环，重复n次
  for (let i = 0; i < n; i++) {
    // 在每次循环中，生成一个随机数，保留两位小数
    let randomNumber = (Math.random() * (max - min) + min).toFixed(2);
    // 判断随机数是否已经存在于数组中
    if (randomNumbers.includes(randomNumber)) {
      // 如果存在，重新生成一个随机数
      i--;
    } else {
      // 如果不存在，将随机数添加到数组中
      randomNumbers.push(randomNumber);
    }
  }
  // 返回数组
  return randomNumbers;
}

// 调用函数，输出一组随机数
console.log(generateRandomNumbers(5, 10, 20));


