function integerTester(num) {
  try {
    let ouput = Number.isInteger(num);
    if (!ouput) throw new Error("Not an integer");
    console.log("OK");
  } catch (error) {
    console.log(error);
  }
}


// integerTester(45)
// integerTester("45")
integerTester(-45)