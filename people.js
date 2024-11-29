"use strict"
const namesImp = require("./name");
const hobbiesImp = require("./hobbies");


function funGuys() {
    let fullNameKey = `${namesImp.fullName().firstName.value} &{namesImp.fullName().lastName.value}`;
    let hobbiesKey = hobbiesImp.hobbies.join(" ");
    return { fullNameKey, hobbiesKey }
};

console.log(funGuys);

