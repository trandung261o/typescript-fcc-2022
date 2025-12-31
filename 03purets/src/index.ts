console.log("Hello world");

class CUser {
    email: string
    name: string
    readonly city: string = "Ninh binh"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}

const ddung = new CUser("tdd@gmail.com", "dung");
// ddung.city = "Ha noi";   // error