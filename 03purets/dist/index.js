"use strict";
console.log("Hello world");
class CUser {
    constructor(email, name) {
        this.city = "Ninh binh";
        this.email = email;
        this.name = name;
    }
}
const ddung = new CUser("tdd@gmail.com", "dung");
// ddung.city = "Ha noi";   // error
