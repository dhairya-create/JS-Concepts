//Lexical Scope

function test(){
    var name = "Dhairya Parikh";

    function displayName(){
        console.log(name);
    }
    displayName();
}

test();