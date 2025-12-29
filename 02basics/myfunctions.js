"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("dinh dung");
signUpUser("dung", "tdd@gmail.com", false);
loginUser("dung", "tdd@gmail.com");
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
    // return 1; //error
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
