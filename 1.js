// Napisati program koji ispisuje racun u kafani, ali samo punoletnim musterijama

// Popust se odobrava ako je 
//   -broj godina deljiv sa 7 (15% pop.)
//   -broj godina deljiv sa 11 (25% pop.)

// Ulazni podaci :
//                  - kol. (br.pica)
//                  - cena 1nog pica
//                  - broj godina musterije

// Napomena : proveriti ulazne pod.(validnost kol, cene i god)

{
    let kol = 3
    let cPkom = 300
    let god = 27
    let Rcn

    let uCP = cPkom * kol
    // console.log(uCP)

    if(kol > 0 && cPkom >0) { 
        if(god >= 18) {
                if(god % 11 == 0 && god % 7 == 0) {
                    Rcn = uCP * 0.6
                }    
                else if(god % 11 == 0) {
                    Rcn = uCP * 0.75
                }
                else if(god % 7 == 0){
                    Rcn = uCP * 0.85
                }
                else {
                    Rcn = uCP
                }
            console.log("Vas racun je : " + Rcn + "din.");
        }
        else {
            console.log('Niste punoletni')
        }
    }
}
