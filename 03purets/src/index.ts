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
    readonly city: string = "Ninh binh"
    constructor(
        public name: string,
        public email: string,
        // private userId: string
    ) { }
}


const ddung = new CUser("tdd@gmail.com", "dung");
// ddung.name;   // error