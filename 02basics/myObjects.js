"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "dung",
    email: "tdd@gmail.com",
    isActive: true
};
function createUser(user) { }
var newUser = { name: "dung", isPaid: false, email: "tdd@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
