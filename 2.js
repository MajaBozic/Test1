// Program za ispisivanje dijamanta sa rupom za uneto N

let N = 5
let w = (2 * N + 1)
// console.log(w)
let i = 0
brZ = (i*2+1)

let red = ' '.repeat((w-1)/2) + '*'.repeat(brZ) + ' '.repeat((w-1)/2) + '\n' 
let srRed = ' ' + '*'. repeat((brZ-1)/2) + ' ' + '*'. repeat((brZ-1)/2) + ' ' + '\n'


for (i = 0; i < (N * 2 - 1); i++) {
    console.log(red.repeat(N-1))
    console.log(srRed)
}