let getNum = () => {
    for (let i = 100; i >= 0; i -= 10) {
        console.log(i);
    }
}

getNum();

let getNum1 = () => {
    for (let i = 25; i <= 67; i += 3) {
        console.log(i);
    }
}

getNum1();

let getMultiply = () => {
    let sum = 1;
    for (let i = 3; i <= 6; i++) {
        sum *= i;
    }
    console.log(sum);
}

getMultiply();

let numberSum = n => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    console.log(total);
}

numberSum(5);

let myString = str => {
    for (let i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
}

myString('Hello World');

let sumOfMultiples = () => {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    console.log(sum);

}

sumOfMultiples();

// Комментарий
