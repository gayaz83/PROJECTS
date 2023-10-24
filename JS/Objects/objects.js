console.log("Objects");

const model = {
    car: "Audi",
    brand: "Q8",
    engine: 4000,
    speed: 8,
}


console.log(model);
console.log(model["brand"]);


const personel = {
    adi:"Ahmet",
    soyadi:"Can",
    dogum: 1990,
    maas: 15000,
    ehliyet:true,
    diller:["english","german"],
    yasHesapla: function () {
        return new Date().getFullYear() - this.dogum
    },
    
}

console.log(personel.yasHesapla());