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

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return { name: "", email: "", isActive: true }
}

createUser({ name: "", email: "", isActive: true });

export { };