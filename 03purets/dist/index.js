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
        this._courseCount = 1;
        this.city = "Ninh binh";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple_${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should not be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubCUser extends CUser {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const ddung = new CUser("tdd@gmail.com", "dung");
// ddung.name;   // error
// ddung.deleteToken(); // error
