let user = {
    name:"Dhairya",
    age:23
}

//Deep copy of the object

//Way - 1 
// const objClone = Object.assign({},user)

//Way - 2
// const objClone = JSON.parse(JSON.stringify(user))

//Way - 3
const objClone = {...user}
objClone.name = "Ram"

console.log(user,objClone);