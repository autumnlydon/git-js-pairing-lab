//Code your solutions in this file
// Problem 1
const fiveToOneHundred = () => {
    for (let i = 5; i < 100; i++) {
        console.log(i)
    }
};

// Problem 2
const multiplesOfThree = () => {
    for (let i = 3; i < 100; i+=3){
        console.log(i);
    }
}

// Problem 3
const multiplesOfThreeOrFive = () => {
    for(let i =0; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
};

// Problem 4
const untilNum = (num) => {
    for (let i = 1; i <= num; i++){
        console.log(i);
    }
};

// Problem 5

const multiply = (num1, num2) => {
    return num1 * num2;
}

//Problem 6

const add = (num1, num2) => {
    if (num1 !== num2){
        return num1 + num2;
    } else {
        return (num1 + num2) * 3;
    }
}

//Problem 7

const isNegative = (num1) => {
   if (num1 < 0) {
    return true;
   } else if (num1 > 0) {
    return false;
   }
}

// Problem 8

const triangleArea = (height, base) => {
    return (height * base) / 2
}

//problem 9

const betweenTwentyAndFourty = (num1) => {
    if (num1 > 20 && num1 < 40) {
        return true;
    } else {
        return false;
    }
}

//Problem 10

const largest = (a, b, c) => {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}

//Problem 11 

const printTime = () => {
    let d = new Date(); //Java
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    console.log(`${hour}:${minute}:${second}`);
}
printTime();

//problem 13

const getExtention = (fileName) =>{
    return fileName.substring(fileName.lastIndexOf('.') +1);
 // Method .substring returns the part of the string after
 // the index of the char '.' in the string stored in
 // variable fileName which we acquire by calling 
 // the method .lastIndexOf('.') + 1 
}
console.log(getExtention('index.js'));

//Problem 15

const switchLetters = (string) => {
    let chars = string.split(''); //This line splits my string 
    //into an array of characters.
    let lastChar = chars.splice(chars.length - 1, 1) //This
    //line removes & stores the last element of array chars in lastChar.
    chars.splice(chars.length + 1, 0, chars[0]) //This line adds the element of array chars
    //index[0] at the index after the last element.
    chars.splice(0, 1); //this line removes a single element at index 0 from chars.
    string = lastChar + chars.join(''); //concatenates chars in new order.
    return string;  

}
console.log(switchLetters('bye'));