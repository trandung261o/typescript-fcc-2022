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
    protected _courseCount = 1;

    readonly city: string = "Ninh binh";
    constructor(
        public name: string,
        public email: string,
        // private userId: string
    ) { }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple_${this.email}`;
    }

    get courseCount(): number {
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
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const ddung = new CUser("tdd@gmail.com", "dung");
// ddung.name;   // error

// ddung.deleteToken(); // error