// Napisati program koji ispisuje racun u kafani, ali samo punoletnim musterijama

// Popust se odobrava ako je 
//   -broj godina deljiv sa 7 (15% pop.)
//   -broj godina deljiv sa 11 (25% pop.)

// Ulazni podaci :
//                  - kol. (br.pica)
//                  - cena 1nog pica
//                  - broj godina musterije

// Napomena : proveriti ulazne pod.(validnost kol, cene i god)

let kol = 3
let cP = 300
let god = 35
// let Rcn
let uCP = cP * kol

if(kol > 0 && cP > 0) { 
    // console.log(uCP)
}

if(god < 18) {
    console.log(' Niste punoletni')
}
else if(god >= 18) {
        if(god % 11 == 0 && god % 7 == 0) {
            Rcn = uCP * 0.6
        }    
        else if(god % 11 == 0) {
            Rcn = uCP * 0.75
        }
        else if(god % 7 == 0){
            Rcn = uCP * 0.85
        }
        else if(god % 7 !== 0 && god % 11 !== 0) {
            Rcn = uCP
        }
    console.log("Vas racun je : " + Rcn + "din.");
}