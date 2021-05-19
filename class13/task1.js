const birthdayCake = (isSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isSick) {
        resolve("i will happy and get the cake");
      } else {
        reject(new Error("i not happy and i am not get cake"));
      }
    }, 2000);
  });
};

birthdayCake(true)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("party is going in the house");
  });
