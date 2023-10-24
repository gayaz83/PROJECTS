console.log("SLM");
// const array = [4, 2, 1, 3]

// let toplam=0
// for (let i=0; i<array.length;i++) {
    
//     toplam += array[i];
    
// }
// console.log(toplam);

// const dizi=[-5, 15, 22, -4, 45, 78]
// let negatives=0
// let positives=0
// for (let i=0; i<dizi.length;i++) {
//     if (dizi[i]<0) {
//         negatives += dizi[i]
//     } else {
//         positives += dizi[i]
//     }
// }
// console.log(negatives);
// console.log(positives);


const notlar = [20, 55, 100, 89, 32]
// let toplam = 0
// for (let i=0; i<notlar.length; i++) {
    
//     toplam += notlar[i];
// }
//  console.log(toplam);

const elliAlt = []
const elliUst = []

for (not of notlar) {
    if(not<50) {
        elliAlt.push(not)
    } else {
        elliUst.push(not)
    }
}
console.log(elliAlt);
console.log(elliUst);

const euro = 29.8
const dolar = 27.97

const tlPrices = [100, 150, 100, 50, 80]

const dolarPrices = tlPrices.map((p) => p/dolar)
const euroPrices = tlPrices.map((p) => Number((p/euro).toFixed(2)))
console.log(dolarPrices);
console.log(euroPrices);

console.log("slm");

const salaries = [10000, 15000, 9000, 20000]
// const sumSalries = salaries.reduce((sum, sal) => sum + sal, 0)

// const salaries1 = salaries.reduce((sum, sam, i) => {
//     let result = `${i} nci işlem ${sum + sal}`
//     console.log(result);
//     return sum + sam
// } )
// console.log(salaries1);
// const multiply = salaries.reduce((acc,val)=> acc * val, 1)
// console.log(multiply);

const zam = salaries.filter((i) => i>=9000 && i<15000).map((p) => p*1.5).reduce((acc,val)=> acc+val, 0)

console.log(zam);