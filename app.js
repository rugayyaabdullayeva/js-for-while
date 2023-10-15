// ! Task 1
// let n = 11

// for (let i = 1; i < n; i += 2) {
//     console.log(i);
//   }


// ! Task 2
// let n = 76542;
// let reversedNumber = 0;

// while (n > 0) {
//   let lastNumber = n % 10;
//   reversedNumber = reversedNumber * 10 + lastNumber;
//   n =parseInt(n / 10);
// }
// console.log(reversedNumber);


// ! Task 3
// let n = 5;
// let number = 2;
// let sum = 0;
// let eded = 0;

// for (let i = 1; i <= n; i++) {
//   eded = eded * 10 + number;
//   sum += eded;
// }

// console.log(sum);


// ! Task 4
// let n = 327;
// let hasil = 1;

// for (let i = 10; n > 0; i++) {
//   let reqem = n % 10;
//   if (reqem % 2 === 1) {
//     hasil *= reqem;
//   }
//   n = parseInt(n / 10);
// }

// console.log(`Ədədin tək rəqəmlərinin hasiləsi: ${hasil}`);


let n = 327;
let hasil = 1;
let tekRaqemVar = false;

while (n > 0) {
  let reqem = n % 10;
  if (reqem % 2 === 1) {
    hasil *= reqem;
    tekRaqemVar = true;
  }
  n = Math.floor(n / 10);
}
if (tekRaqemVar) {
  console.log(`Ədədin tək rəqəmlərinin hasiləsi: ${hasil}`);
} else {
  console.log(-1);
}
