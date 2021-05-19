let totalpoint = 0;

const guessGame = (data) => {
  return new Promise((resolve, reject) => {
    numbers = [1, 2, 3, 4, 5, 6];
    num = Math.random(numbers);
    setTimeout(() => {
      if (data === num) {
        resolve(2);
      } else if (data === num - 1 || data == num + 1) {
        resolve(1);
      } else {
        resolve(0);
      }
    }, 3000);
  });
};

guessGame(prompt("enter the numbers")).then((res) => {
  totalpoint += res;
  console.log("you total score is", totalpoint);
});
