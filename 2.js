// Program za ispisivanje dijamanta sa rupom za uneto N


let N = 5     //6

for (let i = 1; i <= N - 1; i++){
    let red = ''
    red += ' '.repeat(N - i) +'*'.repeat(2 * i - 1)
        console.log(red)
}

let srednjRed = '*'.repeat(N - 1) + ' ' + '*'.repeat(N - 1)
    console.log(srednjRed)

for (let j = 1; j <= N - 1; j++){
    let red2 = ''
    red2 += ' '.repeat(j) + '*'.repeat(N - j) + '*'.repeat(N - j - 1)
        console.log(red2)
}

