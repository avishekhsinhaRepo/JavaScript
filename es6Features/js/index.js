/*Dynamic Property in Object literal */
const ageProperty = "age";
const obj = {
  name: "Alex",
  [ageProperty]: 30,
};
console.log(obj);
console.log(obj.age);
console.log(obj.ageProperty);

/*Rest Operator */

const sumFn = (...data) => {
  let sum = 0;
  data.forEach((element) => (sum = sum + element));
  return sum;
};
console.log(sumFn(1, 2, 3, 4));

/*Promise chaining (all) */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("response 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("response 2");
  }, 2000);
});

Promise.all([promise1, promise2]).then((response) => {
  console.log("Success");
  console.log(response);
}).catch((error) =>{
  console.log("Error occured");
  console.dir(error);
});



Promise.race([promise1, promise2]).then((response) => {
  console.log("Success");
  console.log(response);
}).catch((error) =>{
  console.log("Error occured");
  console.dir(error);
});

