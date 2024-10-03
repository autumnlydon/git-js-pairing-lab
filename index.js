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

//Problem 12

const isLeapYear = (year) => {
    if (year % 4 === 0) {
        return true
    } else {
        return false
    }
}

//Problem 14
const absoluteNineteen = (num) => {
    return Math.abs (19 - num)
}

//Problem 16

const changeString = (string) => {
    let i = string.length
    const alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
}