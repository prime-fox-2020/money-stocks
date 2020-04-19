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
let money = [];

for (const key in moneyStocks) {
  money.push(Number(key))
}
for (let i = 0; i < money.length; i++) {
  for (let j = 0; j < money.length-1; j++) {
    if (money[j] < money[j+1]) {
      let temp = money[j]
      money[j] = money[j+1]
      money[j+1] = temp
    }
  }
}
console.log(money);

function getMoneyChange(jumlah) {
  let temp = {};
  for (let i = 0; i < money.length; i++) {
    while (moneyStocks[money[i]] != 0 && jumlah - money[i] >= 0) {
      if (temp[money[i]]==undefined) {
        temp[money[i]] = 0
      }else{
      temp[money[i]] += 1
      moneyStocks[money[i]] -= 1
      jumlah -= money[i]
      
      }
    }

  }
  let newObj = Object.keys(temp).sort((a,b) => {return b - a})
  if (jumlah != 0) {
    for (const key in temp) {
      let angka = +key;
      moneyStocks[angka] += temp[key];
    }
    console.log('Maaf uang kembalian tidak cukup');
  }
  else{
    for(let i = 0; i < newObj.length; i++){
      console.log(`${newObj[i]} ${temp[newObj[i]]} lembar`)
    }
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
    // console.log('');
    // console.log(moneyStocks);
/*
{ '500': 5,
    '1000': 0,
    '5000': 0,
    '10000': 0,
    '20000': 0,
    '50000': 0,
    '100000': 0 }
*/