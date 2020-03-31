//Diberikan program untuk mengubah
const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
};

//MULAI BAGIAN CODE UNTUK DEBUG
let uang = [];

for (const key in moneyStocks) {
  uang.push(+key);
}
for (let i = 0; i < uang.length - 1; i++) {
  for (let j = i + 1; j < uang.length; j++) {
    if (uang[i] < uang[j]) {
      let swap = uang[i];
      uang[i] = uang[j];
      uang[j] = swap;
    }
  }
}

function getMoneyChange(mauDiTukar) {
  let obj = {};
  let total = 0;
  for (let money in moneyStocks) { // Menghitung total stock uang
    total += (+money * moneyStocks[money])
  }
  for (let i = 0; i < uang.length; i++) {
    while (moneyStocks[uang[i]] != 0 && mauDiTukar - uang[i] >= 0 && total >= mauDiTukar) { // Hanya jika total stock > yg mau ditukar
      if (!obj[uang[i]]) {
        obj[uang[i]] = 0;
      }
      moneyStocks[uang[i]] -= 1;
      obj[uang[i]] += 1;
      mauDiTukar -= uang[i];
      debugger;
      if (mauDiTukar - uang[i] < 0 || moneyStocks[uang[i]] == 0) { // Jika pecahan uang lebih besar dari yang mau ditukar atau pecahan uang di stock habis
        console.log(`${uang[i]} ${obj[uang[i]]} lembar`);
      }
    }
  }
  if (mauDiTukar != 0 || total < mauDiTukar) { // Atau total stock kurang
    for (const key in obj) {
      let sample = +key;
      moneyStocks.sample += obj[key];
    }
    console.log('Maaf uang kembalian tidak cukup');
  }
}
//AKHIR DARI BAGIAN DEBUG

console.log('CASE 1:\n----------------');
getMoneyChange(75000);
/*
    50000 1 lembar
    20000 1 lembar
    5000 1 lembar
*/
console.log('');
console.log('CASE 2:\n----------------');
getMoneyChange(190000);
/*
    100000 1 lembar
    50000 1 lembar
    20000 2 lembar
*/
console.log('');
console.log('CASE 3:\n----------------');
getMoneyChange(190000);
/*
    Maaf uang kembalian tidak cukup
*/
console.log('');
console.log('CASE 4:\n----------------');
getMoneyChange(100000);
/*
    20000 1 lembar
    10000 5 lembar
    5000 4 lembar
    1000 10 lembar
*/
console.log('');
console.log('CASE 5:\n----------------');
getMoneyChange(400);
/*
    Maaf uang kembalian tidak cukup
*/
console.log('');
console.log(moneyStocks);
/*
{ '500': 5,
    '1000': 0,
    '5000': 0,
    '10000': 0,
    '20000': 0,
    '50000': 0,
    '100000': 0 }
*/