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