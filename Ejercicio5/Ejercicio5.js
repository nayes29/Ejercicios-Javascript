/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1.	Write a command that prints out all of the people in the list.
2.	Write the command to remove "Dani" from the array.
3.	Write the command to remove "Juan" from the array.
4.	Write the command to move "Luis" to the front of the array.
5.	Write the command to add your name to the end of the array.
6.	Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
7.	Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
/*

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);

people.splice(people.indexOf("Dani"), 1);
people.splice(people.indexOf("Juan"), 1);
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

people.push("Nallely");
console.log(people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
}
console.log(people.indexOf("Maria"));


