// console.log(dob);

console.log("OPERATORS")

//! ========== Template Literals ============
const maas = 70000
const izinGunu = 30
console.log(`MAAS=${maas} + SIGORTA, 
IZIN SURESI: ${izinGunu} gün`)

// ? template literal ile bir JS expression kullanmak mumkundu
console.log(`${maas - izinGunu * 500}`)

//? Ornek
// const firstName = prompt("Please enter your name:")
// const dob = prompt("Enter your day of birth:")
// console.log(`${firstName} is ${new Date().getFullYear() - dob} years old`)

//? NOT: Sistem saatini almak icin Date() class'ı kullanilabilir.
console.log(new Date().getFullYear())

//! Prompt funksiyonu verileri hep string olarak alir
// console.log(dob, typeof dob)

//* CAPRMA VE US ALMA (Multiply, Pow)
//*--------------------------------------

//? Ornek
//?-------------------------------------
//? Kullanicidan veri girisi istedik.
// ? prompt ile kullancidan alinan veri default olarak string'dir
//? Bu veriyi number'a Number() fonksyinu ile cevirebilriz.

//? promptan gelen deger  string oldugundan sayısal islemlerde kullanmak üzere NUmber'lastirmakta fayda vardir.
//? 1- promptun onune + koymak
//? 2- Number() kullanmak
// const r = +prompt("Please enter the radius:")
// const r = Number(prompt("Please enter the radius:"))
// const square = (Math.PI * r ** 2).toFixed(1) //? virgülden sonra 3 basamak alir

// console.log(`SQUARE= ${square}`)

//? Yuvarlama fonsk.
console.log(Math.round(123.556)) //? yakın tam sayiya yuvarlar(124)
console.log(Math.ceil(123.26)) //? tavana yuvarlar (124)
console.log(Math.floor(123.99)) //? tabana yuvarlar (123)

console.log(Math.trunc(123.19)) //? her zaman tam kısmı alir.
console.log((123.567).toFixed(2)) //? virgüden sonra 2 basamak alır (string alarak)

//?Bazi fonksiyonlar
// Math.floor();  //* her zaman en yakin alt tamsayiya yuvarlar
// Math.ceil();  //* her zaman en yakin ust tam tamsayiya yuvarlar
// Math.round(); //* en yakin tam sayiya yuvarlar.
// Math.trunc(); //* sayinin tam kismini alir.
// Math.random(); //* 0 ve 1 arasında rasgele sayi uretir.

