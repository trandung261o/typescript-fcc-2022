// const User = {
//     name: "dung",
//     email: "tdd@gmail.com",
//     isActive: true
// }

// function createUser(user: { name: string, isPaid: boolean }) { }

// let newUser = { name: "dung", isPaid: false, email: "tdd@gmail.com" }

// createUser(newUser);

// function createCourse(): { name: string, price: number } {
//     return { name: "reactjs", price: 399 };
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true }
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "12345",
    name: "Dung",
    email: "tdd@gmail.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDAte: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let myCard: cardDetails = {
    cardnumber: "123456",
    cardDAte: "12/12/2012",
    cvv: 123
}

myUser.email = "tddd@gmail.com";
// myUser._id = "1234";     // error

export { };