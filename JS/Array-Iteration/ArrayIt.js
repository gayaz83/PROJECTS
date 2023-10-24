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