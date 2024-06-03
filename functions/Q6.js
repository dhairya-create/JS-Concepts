//Spread vs Rest Operator

function multiply(...nums){ //rest
    console.log(nums[0] * nums[1]);
}

var arr = [3,4];

multiply(...arr)//spread