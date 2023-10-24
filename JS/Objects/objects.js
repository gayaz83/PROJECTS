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

const araclar = {
    car:"Audi",
    brand:"Q8",
    engine:4000,
    speed:8,
    colors: ["pink", "black", "gray"],
    power : {fosil:"benzin", clean:"elektrik"},
}

console.log("********");
console.log(araclar.engine);
console.log(araclar["speed"]);

console.log(araclar.colors[2]);
console.log(araclar.power.clean);

araclar.car ="Q3"

console.log(araclar.car);
araclar.power.clean = "hybrid"
console.log(araclar.power.clean);

araclar["power"]["fosil"]="lpg"
 console.log(araclar["power"]["fosil"]);

araclar.sunroof = true

console.log(araclar);
console.log(araclar.sunroof);


const kimlik = {
    adi:"Gokhan",
    soyadi:"Ayaz",
    dogum:1983,
    maas:4500,
    ehliyet: true,
    diller:["english", "norwegian"],
    yasBul: function () {
       return new Date().getFullYear() - this.dogum
    },
    ozet:function() {
        return `${this.adi} ${this.soyadi} ${this.yasBul()} yasındadır`
    },
}

console.log(kimlik.yasBul());
console.log(kimlik.ozet());