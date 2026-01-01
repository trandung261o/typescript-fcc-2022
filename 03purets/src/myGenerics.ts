const score: Array<number> = [1, 2, 3];
const names: Array<string> = ["dinh", "dung"];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree(true);

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({ brand: "coca", type: 1 })