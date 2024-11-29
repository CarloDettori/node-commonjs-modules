"use strict"
const names = require("./name");
const hobbies = require("./hobbies");

function funGuys() {
    fullNameKey = fullName.firstName.value + " " + fullName.lastName.value
    hobbiesKey = hobbies.join(" ")
    return { fullNameKey, hobbiesKey }
};

console.log(funGuys);

