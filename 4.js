// Napisati program koji ispisuje tablicu mnozenja za 1 cifru

{
   let br = 5
   let drugiRed = '5 x i = '

   console.log('  i   = 1  2  3  4  5  6  7  8  9')
   for (i = 1; i <= 9; i ++){
      if (i * br < 10) {
         drugiRed += i * br + '  '
      }
      else {
         drugiRed += i * br + ' '
      }
   }
   console.log(drugiRed)
}