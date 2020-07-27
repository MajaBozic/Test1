// Napisati program koji ispisuje racun u kafani, ali samo punoletnim musterijama

// Popust se odobrava ako je 
//   -broj godina deljiv sa 7 (15% pop.)
//   -broj godina deljiv sa 11 (25% pop.)

// Ulazni podaci :
//                  - kol. (br.pica)
//                  - cena 1nog pica
//                  - broj godina musterije

// Napomena : proveriti ulazne pod.(validnost kol, cene i god)

let god = 33
let cP = 300
let kol = 3
let Rn

if(kol > 0 && cP > 0 && god > 18) {
    let uCP = cP * kol
}

if(god % 7 == 0){
    Rn = uCP * 0.85
    console.log("Vas racun je : " + Rn + "din.")
}
else if(god % 11 == 0) {
    Rn = uCP * 0.75
    console.log("Vas racun je : " + Rn + "din.")
}
else {
    Rn = uCP
    console.log("Vas racun je : " + Rn + "din.")
}