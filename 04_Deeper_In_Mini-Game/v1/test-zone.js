// function integerTester(num) {
//   try {
//     let ouput = Number.isInteger(num);
//     if (!ouput) throw new Error("Not an integer");
//     console.log("OK");
//   } catch (error) {
//     console.log(error);
//   }
// }

// // integerTester(45)
// // integerTester("45")
// integerTester(-45)

// console.log(Math.random());
// console.log(Math.ceil(Math.random() * 9));
// console.log(Math.floor(Math.random() * 11));

const max = 10;
const min = 1;

// for (let i = 0; i < 100; i++) {
//   // console.log(Math.floor(Math.random() * 10) + 2);
//   console.log(Math.floor(Math.random() * (max - min) ) + min);
// }

for (let i = 0; i < 100; i++) {
  // console.log(Math.floor(Math.random() * 10) + 2);
  console.log(Math.floor(Math.random() * (max - min - 1)) + min);
}


