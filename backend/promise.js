// new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("After 1 seconds");
//     res();
//   }, 5000);
// }).then(() => {
//   console.log("Hi");
//   console.log("Hello");
// });

async function Test() {
  await new Promise((res, rej) => {
    setTimeout(() => {
      console.log("After 1 seconds");
      res();
    }, 5000);
  });

  console.log("Hi");
  console.log("Hello");
}

Test();

// After 1 seconds
// Hi
// Hello
