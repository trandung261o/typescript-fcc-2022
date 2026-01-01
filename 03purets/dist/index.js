"use strict";
console.log("Hello world");
// class CUser {
//     public email: string
//     private name: string
//     readonly city: string = "Ninh binh"
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = name
//     }
// }
class CUser {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = "Ninh binh";
    }
}
const ddung = new CUser("tdd@gmail.com", "dung");
// ddung.name;   // error
