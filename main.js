console.log('Hello Lil Mac')

// let i = 0
//
// while(i < 30) {
//   console.log(i + 1)
//   i +=1



let answer = prompt('How are you doing?').toLowerCase()
let goodWords = ['good', 'well', 'nice', 'fair', 'yer']
let badWords = ['chill', 'bad', 'meh', 'i fought roy']

 // if ... goodWords.includes(answer)

if (goodWords.includes(answer)){
  console.log('That\'s great')
  let answer2 = prompt('Where are you from?').toLowerCase()
  if(answer2 == 'smashville') {
    console.log('YUR')
  }
} else if (answer == "bad") {
  console.log("01 Roy gotchue huh?")
} else {
  console.log("Get good, dawg")
}
