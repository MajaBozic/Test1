// Program koji ispisuje zbir brojeva deljivih sa 3 i proizv. br koji nisu deljivi sa 3 a jesu sa 7 (izmedju K i N ukljucujuci i njih )

let k = 3         // 6, 14
let n = 35        // 25, 36
let zb = 0
let pr = 1


if (k > n) {
    let t = k
    k = n
    n = t
}

for (k; k <= n; k++){
        if (k % 3 == 0) {
                zb += k
        }
        else if (k % 7 == 0) {
                pr *= k
        }
}
console.log('Zbir br deljivih sa tri je ' + zb + ', a proizvod brojeva nedeljivih sa 3, koji su deljivi sa 7 jednak je ' + pr)
