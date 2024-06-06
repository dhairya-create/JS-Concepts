function getItems(fruitList,favouriteFruit,...args){
    return [...fruitList,...args,favouriteFruit]
}

console.log(getItems(["banana,apple"],"pear","orange"))