//Guess the output

const settings = {
    username:"Dhairya",
    level:19,
    health:90
}


const data = JSON.stringify(settings,["level","health"])
console.log(data);