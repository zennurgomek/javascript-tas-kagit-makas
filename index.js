//tas kagıt makas oyunu

let oyuncuSecimi = prompt("Seçim yapın: taş, kağıt, makas");
let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3)) 
  console.log(bilgisayarHamlesi);

if (oyuncuSecimi == bilgisayarHamlesi) { 
  console.log('Berabere ')
} else if ( 
  (oyuncuSecimi === "tas" && bilgisayarHamlesi === "makas")||
  (oyuncuSecimi === "makas" && bilgisayarHamlesi === "kagit") ||
  (oyuncuSecimi === "kagit" && bilgisayarHamlesi === "tas")
) {
  console.log('Kazandınız!!!');
} else {
  console.log('Kaybettiniz.');
}