"use strict"
const namesImp = require("./name");
const hobbiesImp = require("./hobbies");


function funGuys() {
    let fullNameKey = `${namesImp.fullName().firstName} ${namesImp.fullName().lastName}`;
    let hobbiesKey = hobbiesImp.hobbies.join(" ");
    return { fullNameKey, hobbiesKey }
};

console.log(funGuys);

