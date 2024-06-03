//First Class Function in JavaScript
//Q3 - What are first class functions?

//Treating function like a varibale is known as First Class Functions
function square (num){
    return num*num;
}

function displaySqaure(fn){

    console.log("Square is: "+fn(6));

}

displaySqaure(square)