"use strict"

function fullName(firstName, lastName) {
    return { firstName, lastName }
};

console.log(fullName("carlo", "dettori"));

module.export = fullName;