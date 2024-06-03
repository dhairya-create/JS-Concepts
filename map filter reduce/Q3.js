//Reduce method

const nums=[1,2,3,4];


const sum = nums.reduce((acc,currentValue) => {

    return acc+currentValue;

},0)

console.log(sum);