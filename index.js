const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
};
// console.log('moneyStocks: ', moneyStocks);

function getMoneyChange(num) {
  //mengubah obj menjadi arr
  const stock = Object.entries(moneyStocks)

  //ketersediaan uang
  let totalUang = 0
  for (let i = 0; i < stock.length; i++) {
      totalUang += stock[i][0] * stock[i][1];
  }
  console.log('totalUang: ', totalUang);

  //syarat mencari kembalian di jalankan
  if (totalUang < num) {
      return console.log(`Maaf uang kembalian tidak cukup`)
  } else {
      let kembalian = {}
      for (let k = stock.length - 1; k >= 0; k--) {
          while (num >= stock[k][0] && stock[k][1] > 0) {
              if (stock[k][1] > 0) {
                  stock[k][1]--
                  num -= stock[k][0]
                  moneyStocks[stock[k][0]]--
                  if (kembalian[stock[k][0]] == undefined) {
                      kembalian[stock[k][0]] = 0
                  }
                  kembalian[stock[k][0]]++
              }
          }
      }

      kembalian = Object.entries(kembalian)
      // console.log('kembalian: ', kembalian);
      for (let i = kembalian.length - 1; i >= 0; i--) {
          console.log(`${kembalian[i][0]} ${kembalian[i][1]} lembar`);
      }
  }
}

getMoneyChange(75000);
/*
50000 1 lembar
20000 1 lembar
5000 1 lembar
*/
console.log(`\n`);
getMoneyChange(190000);
/*
100000 1 lembar
50000 1 lembar
20000 2 lembar
*/
getMoneyChange(190000);
/*
Maaf uang kembalian tidak cukup
*/
console.log(`\n`);
getMoneyChange(100000);
/*
20000 1 lembar
10000 5 lembar
5000 4 lembar
1000 10 lembar
*/
console.log(`\n`);
getMoneyChange(400);
/*
Maaf uang kembalian tidak cukup
*/
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