console.log("script file wired up and ready to roll!!!")

// 1. allNames:
// Use .forEach to print all persons names in the console.

// data.forEach(allNames);

// function allNames(dataName) {
//     console.log(dataName.name);
// }


// 2. totalAgeAllPersons:
// Find the total combined age of all persons.

// let totalAgeAllPersons = 0;
// for (let i = 0; i<data.length; i++){
//     totalAgeAllPersons += data[i].age;
// }
// console.log(totalAgeAllPersons);

// 3. totalAgeAllPets:
// Find the total combined age of all pets.

// let totalAgeAllPets = 0;
// for (let i = 0; i<data.length; i++){
//     for (let j = 0; j < data[i].pets.length; j++) {
//         totalAgeAllPets += data[i].pets[j].age;
//     }
//  }
// console.log(totalAgeAllPets);

// 4. oldEnough:
// Use .filter() to create an array of people old enough to be president.
// const oldEnough = data.filter(function(num) {
//     return num.age >= 35;
// })

// console.log(oldEnough);

// 5. sadPeople:
// Use .filter() to create an array of "sad" people (people with no pets).
// const sadPeople = data.filter(function(pet) {
//     return pet.pets.length == 0;
// })

// console.log(sadPeople);


// 6. warAndPeace:
// Use.map() to create an array called warAndPeace that has, in each index the string "war" or "peace"
//   * the string "war" if the person at that has BOTH a cat AND a dog.
//   * the string "peace" otherwise.

// const warAndPeace = data.map(function(word) { //word is data[i]
//     let cat = false; // sets a default of no cat
//     let dog = false; // sets a default of no dog   
//         for (let j = 0; j < word.pets.length; j++) { // creates a loop to look at each pets array for each data[i] ('word')
//             if (word.pets[j].type == "cat") { // if a cat is found, change variable 'cat' to true
//                 cat = true;
//             }
//             if (word.pets[j].type == "dog") { // if a dog is found, change variable 'dog' to true
//                 dog = true;
//             }
//         } 
//     if (cat && dog) { // if cat and dog are both true
//         return "war";
//     } return "peace";
// })

// console.log(warAndPeace);

// 7. justSpock:
// Create an array of all the pet objects where the pets named is "spock".
const spockArr = [];
const justSpock = data.filter(function(person) {
    for (let i = 0; i < person.pets.length; i++) {
        if (person.pets[i].name == "spock") {
            spockArr.push(person.pets[i]);
            return person.pets[i];
        }
    }
})
// here's the array that we're supposed to get....
console.log(spockArr);

// this one doesn't work...why can't i get justSpock to return person.pets[i]?
console.log(justSpock);



/*

THIS IS SOME GARBAGE WHERE I WAS TRYING SOME OTHER STUFF THAT I COULDN'T GET TO WORK...

// const justSpock = data.filter(function(pet) {
//     const justSpock2 = [];
//     for (let i = 0; i < pet.pets.length; i++) {
//         if (pet.pets[i].name == "spock") {
//             //console.log(pet.pets[i]);
//             justSpock2.push(pet.pets[i]);
//             console.log(justSpock2);
//             return pet.pets[i];
//         } console.log(justSpock2[0]);
//     } //console.log(justSpock2);
//     //console.log(pet.pets.name);
// })
// console.log(justSpock[0]);


HERE'S ANOTHER THING THAT DIDN'T WORK... I TRIED NESTING FILTERS...

//console.log(justSpock);

// const justSpock = data.filter(function(pet){  // pet is data [i]
//     const justSpock2 = pet.pets.filter(function(pet2) { // pet2 is pets[i]
//         if (pet2.name == "spock") { //pet2.name is pets[i].name is pet.pets[i].name is data[i].pets[j].name
//             return pet2;
//         }
//     })
//     console.log(justSpock2[0]);
//     return justSpock2[0];
//     //if (justSpock2.name = "spock") {
//     //    console.log("yo!!");
//     //}
// })
// console.log(justSpock);

*/




// HUNGRY FOR MORE???

// 8. catYears:
// Find the total combined age of all cats (type: "cat").


// 9. combinedAgeOfAllPetsOfDrinkers:
// Find the combined age of all pets belonging to people old enough to legally purchase alcohol


// 10. youngestPets:
// Create an array containing the youngest pet each pet owner has.
// Here's the answer: 
/*
[ { type: 'rock', name: 'herbert', age: 126003219 },
  { type: 'cat', name: 'colby', age: 1 },
  { type: 'guinea pig', name: 'kirk', age: 1 },
  { type: 'dog', name: 'midnight', age: 3 },
  { type: 'dog', name: 'quinn', age: 8 },
  { type: 'dog', name: 'hazel', age: 7 },
  { type: 'monstera', name: 'holey', age: 1 },
  { type: 'goldfish', name: 'betsy', age: 4 },
  { type: 'cat', name: 'rosie', age: 0.005 },
  { type: 'dog', name: 'nacho', age: 1 },
  { type: 'bearded dragon', name: 'ferg', age: 3 },
  { type: 'cockatoo', name: 'spockatoo', age: 33 },
  { type: 'cat', name: 'mija', age: 6 },
  { type: 'cat', name: 'caesar', age: 3 },
  { type: 'cat', name: 'eddie', age: 7 },
  { type: 'cat', name: 'rocky', age: 5 },
  { type: 'snake', name: 'reginald', age: 12 } ]
*/


// 11. petNameString:
// Create a string that is all the pets names separated by spaces (order doesn't matter).
