let farm = {};
farm.barn = [];
farm.pigsty = [];
farm.chickenCoop = [];
farm.bigMeadow = [];
farm.littleMeadow = [];
farm.yard = [];

// Befolka bondgården.
farm.barn.push("Ko 1", "Ko 2");
farm.chickenCoop.push("Kyckling A", "Kyckling b", "Kyckling c", );


function moveAnimals(currentPosition, destination) {
    let animalCount = farm[currentPosition].length;
    let animals = farm[currentPosition].splice(0, animalCount);
    farm[destination].push(animals);
}