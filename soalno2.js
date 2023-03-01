function longest (sentence) {
  const words = sentence.split(' ')

  let longestLength = 0
  words.forEach(word => {
    if (word.length > longestLength) {
      longestLength = word.length
    }
  })

  let longestWords = words.filter(word => word.length === longestLength)

  return longestWords[0]
}

const sentence = 'Saya sangat senang mengerjakan soal algoritma'
console.log(longest(sentence)) // O
