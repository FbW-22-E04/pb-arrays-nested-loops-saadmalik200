for (let i = 0; i < 1; i++) {
  //   console.log(`*`);
  let total = "";
  for (let j = 0; j < 4; j++) {
    total += "*";
    console.log(total);
  }
}

console.log(`--------------------------------------`);

const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (const [i, main] of ARR.entries()) {
  console.log(`row ${i}`);
  for (const item of main) {
    console.log(item);
  }
}

console.log(`--------------------------------------`);

let acend = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    acend += i + " ";

    // console.log(j);
  }
}
console.log(acend);

console.log(`--------------------------------------`);

let seq = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    seq += j + " ";

    // console.log(j);
  }
}

console.log(seq);

console.log(`--------------------------------------`);

let acend1 = "";
let seq1 = "";
for (let k = 0; k < 2; k++) {
  if (k === 0) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        acend1 += i + " ";

        // console.log(j);
      }
    }
  } else {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        seq1 += j + " ";

        // console.log(j);
      }
    }
  }
}
console.log(acend1);
console.log(seq1);
