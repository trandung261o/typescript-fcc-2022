// const user: (string | number)[] = [1, "dung"];

let tUser: [string, number, boolean];

tUser = ["dung", 123, true];

let rgb: [number, number, number] = [225, 123, 112];

type TUser = [number, string];

const newUser: TUser = [112, "example@gmail.com"];

newUser[1] = "tdd@gmail.com";
newUser.push(123, "dinhdung");