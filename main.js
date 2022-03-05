var randomWords = require('random-words');


List = [
    'lying', 'block', 'exist',
    'touch', 'learn', 'story',
    'rough', 'funny', 'heavy',
    'seven', 'cloth', 'zebra',
    'crack', 'lungs', 'lunch',
    'pride', 'basis', 'broad',
    'zebra', 'women', 'bread',
    'today'
  ]

randomWords(3000).forEach(word => {
    // console.log(word.length)
    if(word.length == 5)
    {
        List.push(word)
    }
})

console.log(List)
console.log(List.length)


const fs = require('fs')

fs.writeFile('./words.txt', JSON.stringify(List), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
