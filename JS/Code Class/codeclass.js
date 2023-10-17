// console.log("selam codeclass tan");

// 1. Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* -------------------------------------------------------------------------- */
/*                                   1-ÇÖZÜM                                  */
/* -------------------------------------------------------------------------- */
// let tekSayilar = []
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 1){
//         tekSayilar.push(numbers[i])
//     }
// }
// console.log(tekSayilar);

// let ciftSayilar = []

// for (let i=0; i<numbers.length; i++ ) {
//     if(numbers[i]%2===0) {
//         ciftSayilar.push(numbers[i])
//     }
// }
//  console.log(ciftSayilar);


/* -------------------------------------------------------------------------- */
/*                                   2-ÇÖZÜM                                  */
/* -------------------------------------------------------------------------- */

// 2. Soru: Bir dizi içindeki sayıları büyükten küçüğe sıralamak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

// let numbers = [8, 4, 6, 2, 9, 5, 7];

// numbers.sort((a, b) => a-b)
// console.log(numbers);


/* -------------------------------------------------------------------------- */
/*                                   3-ÇÖZÜM                                  */
/* -------------------------------------------------------------------------- */

// 3. Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?

// let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];

// console.log(words.join(" "));

/* -------------------------------------------------------------------------- */
/*                                   4-ÇÖZÜM                                  */
/* -------------------------------------------------------------------------- */

// 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.


// let sentence = "JavaScript harika bir dil";

// console.log(sentence.split (" "));

// let senArr=sentence.split(" ")
// let reverseArr=senArr.reverse()

// console.log(reverseArr);




/* -------------------------------------------------------------------------- */
/*                                   5-ÇÖZÜM                                  */
/* -------------------------------------------------------------------------- */


// 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

let text = "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";

let textList = text.split(" ")

let newTextArr = []

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


// 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];


// 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

// let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];