//Currying vs Partial Application


function sum(a){
    return function(b,c)
    {
        return a+b+c;
    }
}

const x  = sum(10);
console.log(x(5,6));