let sum = (a, b) => {
    let result = a + b;
    return result;
}

let res = sum(10,10);
console.log("Sum = " + res);

let Multiply= (x, y) => {
    let mul = x * y;
    return mul;
}

let mulres= Multiply(5,5);
console.log("Multiplication Result = " + mulres);

const arr=["Sumathy","Mathew","Aishu","Cony","Brown","John"];
let del=(arr)=> delete arr[2];
del(arr);
console.log("Deleting element at 2nd index: "+arr[2]);
