// Program koji ispisuje zbir brojeva deljivih sa 3 i proizv. br koji nisu deljivi sa 3 a jesu sa 7 (izmedju K i N ukljucujuci i njih )

let k = 3
let n = 35
let sum = 0
let pr = 1

if (k > n) {
    let t = k
    k = n
    n = t
}

for (k % 3 == 0; k <= n ; k++ ) {
    sum += k
}
console.log("Zbir brojeva deljivih sa 3 u okviru brojeva izmedju k i n jednak je " + sum)

for (k % 3 !== 0 && k % 7 === 0; k <= n; k++) {
    pr *= k
}
console.log("Proizvod brojeva koji nisu deljivi sa 3, a jesu sa 7 /u okviru brojeva izmedju k i n/ jednak je " + pr)