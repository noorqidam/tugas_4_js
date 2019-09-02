var rina = 160;
var rahmat = 170;
var budi = 165;


if (rina > rahmat) {
  if (rina > budi && rahmat > budi){
    console.log ('Rina tertinggi, Rahmat kedua, Budi terpendek')
  } else if (rina > budi && rahmat < budi)
  {
    console.log ('Rina tertinggi, Budi kedua, Rahmat terpendek')
  }
  else {
    console.log('Budi tertinggi, Rina kedua, Rahmat terpendek')
  }
}
else {
  if (rina < budi && rahmat > budi) {
    console.log("Rahmat tertinggi, Budi kedua, Rina terpendek")
  }
  else if (rina > budi && rahmat > budi) {
    console.log("Rahmat tertinggi, Rina kedua, Budi terpendek")
  }
  else {
    console.log("Budi tertinggi, Rahmat kedua, Rina terpendek")
  }
}
