let shoppingList = [];

let milk = {
    id: 0,
    name: "milk"
}
let cucumber = {
    id: 1,
    name: "cucumber"
}
let cake = {
    id: "a",
    name: "cake"
}

shoppingList.push(milk, cucumber, cake);

function addToList(item) {
    shoppingList.push(item);
}

function removeFromList(productName) {
    // Hitta index - hittade en lösning på stackoverflow.
    let index = shoppingList.map(e => e.name).indexOf(productName);
    console.log(index)

    // En annan metod där vi istället för indexvärdet får hela produkten.
    let idx = shoppingList.findIndex(function (product) {
        return product.name == productName
    });
    // Splice:a ut produkten utifrån dess index-värde.
    shoppingList.splice(idx, 1);
}