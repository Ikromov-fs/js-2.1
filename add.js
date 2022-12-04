// 2-masala

var name = prompt("Ismimgizni kiriting");
var money = prompt(`${name} sayohat uchun qanch mablag'iz bor (summ)`);

if( money >= (500*11100.61+250*11100.61+120*12247.79)){
    alert(`${name} oq yo'l`)
}
else if( money < ( 500*11100.61+250*11100.61+120*12247.79 ) ){
    alert(`${name} mablag' yetarli emas`)
}
else{
    alert(`${name} summda kiriting`)
}