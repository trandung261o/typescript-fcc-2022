let score: number | string = 33;

score = 44;

score = "55";

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let dung: User | Admin = { name: "dung", id: 334 };

dung = { username: "dinh", id: 123 };

// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("3");


function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase();   // string
    } else {
        id + 2;     // number
    }
}

// array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = [1, 2, 3, "4", true];

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle";
// seatAllotment = "crew";     // error