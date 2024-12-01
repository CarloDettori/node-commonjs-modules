"use strict"
const fullName = require("./name.js");
const hobbies = require("./hobbies.js");

//let fullNameKey = fullName("carlo", "dettori")
//console.log(fullNameKey)

function funGuys() {
    let fullNameObj = fullName("carlo", "dettori");
    let hobbiesArr = hobbies("fishing", "hiking", "snorkeling");

    return {
        fullName: fullNameObj,
        hobbies: hobbiesArr
    };
}

console.log(funGuys());

