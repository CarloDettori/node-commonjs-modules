"use strict"
const fullName = require("./name.js");
const hobbies = require("./hobbies.js");

//let fullNameKey = fullName("carlo", "dettori")
//console.log(fullNameKey)

function funGuy() {
    let fullNameObj = fullName("Carlo", "Dettori");
    let hobbiesArr = hobbies("painting", "hiking", "gaming");

    return {
        fullName: fullNameObj,
        hobbies: hobbiesArr
    };
}

console.log(funGuy());

