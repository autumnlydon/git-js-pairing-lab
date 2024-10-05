//Problem 11

const printTime = () => {
    const date = new Date()
    const seconds = date.getSeconds()
    const hours = date.getHours() 
    const minutes = date.getMinutes()
    console.log(`${hours}:${minutes}:${seconds}`)
}
//printTime()

//Problem 13

const getExtension =(file) => {
    return `.` + file.split(".").pop()
}
//console.log(getExtension("index.js"))

//Problem 15


// const switchLetters = (word) => {
//     let wordArray = word.split('')
//     console.log("after split:", wordArray)
//     [wordArray[0], wordArray[wordArray.length - 1]] = [wordArray[wordArray.length - 1], wordArray[0]]
//     console.log("after swap", wordArray)
//     let swappedLetters = wordArray.join('')
//     return swappedLetters
// //try to figure out a way to turn the argument into an array and then switch positions 0 and -1
// }

// console.log(switchLetters("party"))

const switchLetters = (word) => {
    let wordArray = word.split('');

    const firstLetter = wordArray[0]; 
    const lastLetter = wordArray[wordArray.length - 1];
    
    wordArray[0] = lastLetter; 
    wordArray[wordArray.length - 1] = firstLetter;

    let swappedLetters = wordArray.join('');
    return swappedLetters;
}


console.log(switchLetters("meow"));
