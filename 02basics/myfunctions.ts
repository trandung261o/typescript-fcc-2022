function addTwo(num: number): number {
    return num + 2
    // return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

let myValue = addTwo(5);
getUpper("dinh dung");
signUpUser("dung", "tdd@gmail.com", false);
loginUser("dung", "tdd@gmail.com");

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "";
}

const heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3];

heroes.map((hero): string => {
    return `Hero is ${hero}`;
    // return 1; //error
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { }