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

for (let i = 0; i < newTextArr.length; i++) {
    const element = array[i];
    
}


// 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];


// 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.

// let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];




/* -------------------------------------------------------------------------- */
/*                                   8.ÇÖZÜM                                  */
/* -------------------------------------------------------------------------- */

// 8.Soru
// 1.Anagram Check
// Anagrams are words or phrases formed by rearranging the letters of another, such as listen and silent or
// triangle and integral.
// Write a JavaScript function called areAnagrams that takes two strings as input and returns true if the two strings
// are anagrams of each other, and false otherwise.
// Your function should be case-insensitive and ignore spaces and punctuation.
// It should return true if the input strings have the same set of characters (ignoring order), and false otherwise.
// Some anagram examples:
// console.log(areAnagrams("listen", "silent")); // Should print true
// console.log(areAnagrams("triangle", "integral")); // Should print true
// console.log(areAnagrams("debit card", "bad credit")); // Should print true
// console.log(areAnagrams("Dormitory", "dirty room")); // Should print true
// console.log(areAnagrams("The Morse Code", "Here come dots")); // Should print true
// console.log(areAnagrams("Astronomer", "Moon starer")); // Should print true
// console.log(areAnagrams("hello", "world")); // Should print false
// console.log(areAnagrams("apple", "banana")); // Should print false
// console.log(areAnagrams("hello", "holla")); // Should print false
// console.log(areAnagrams("race", "racing")); // Should print false


// const anagrams = (words1,words2) => {
//     // let a = words1.toLowerCase().trim().split("").sort().join()
//     // let b = words2.toLowerCase().trim().split("").sort().join()
//     // if (a === b){
//     //     return true    
//     // }else {
//     //     return false
//     // }
//     // return a === b  
//     return  words1.toLowerCase().trim().split("").sort().join() === words2.toLowerCase().trim().split("").sort().join()
// }
// console.log(anagrams("The morse Code","here come DOTS"));





// 9. Write a js code that will uniqe the elements of the array containing repetitive elements.
// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = removeDuplicates(arrayWithDuplicates);
// // uniqueArray will be [1, 2, 3, 4, 5]


/* -------------------------------------------------------------------------- */
/*                               1.çözme yöntemi                              */
/* -------------------------------------------------------------------------- */
// const removeDuplicates = (array1) => {
//     let newArray = []
//     for(i = 0 ; i < array1.length ; i++){
//         if (!newArray.includes(array1[i])){
//         newArray.push(array1[i])
      
//     }
    
// }

//     return newArray.sort()
// }
// console.log(removeDuplicates([1,2,2,4,1,6,6,6,2,3]));
/* -------------------------------------------------------------------------- */
/*                               2.çözme yöntemi                              */
/* -------------------------------------------------------------------------- */
// const removeDuplicates = (array1) => {
//     let newArray = []
//     for(i = 0 ; i < array1.length ; i++){
//         !newArray.includes(array1[i]) ? 
//         newArray.push(array1[i]) : null
      
    
    
// }

//     return newArray.sort((a,b) => a-b)
// }
// console.log(removeDuplicates([1,2,2,4,1,6,6,6,2,3]));

// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız? 

let numbers1 = [1, 2, 3, 45, 65]
let sum = 0

numbers1.forEach((v) => {
    sum += v
})
console.log(sum/numbers1.length);



// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

let numbers3 = [1, 2, 3, 4, 5];



// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.

let numbers4 = [1, 2, 3, 4, 5];


// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).

let numbers5 = [1, 2, 3, 4, 5];

let reserved = []

numbers5.forEach((e) => {reserved.unshift(e)

})
console.log(reserved);

// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]

let words = ["JavaScript", "Python", "Java", "C++"];

let reservedWords = []

words.reverse(map((e)=> e))
console.log(words);


// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.

let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53];


const asalSayi = numbers6.filter(e => {
    for (let i=2; i< e; i++)
    if (e%i===0) return false;
    return true;
    })
    console.log(asalSayi);

// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.

let numbers7 = [1, 2, 3, 4, 5];
const cıftkare = numbers7.map((i) => i*i).filter((i) =>i % 2 === 0).map((i) => i*2).reduce((a,b) => a+=b,0)