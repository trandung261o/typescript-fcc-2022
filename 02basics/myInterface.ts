interface IUser {
    readonly dbId: number,
    email: string,
    userID: number,
    googleId?: number,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

const dinhdung: IUser = {
    dbId: 1123,
    email: "tdd@gmail.com",
    userID: 1123,
    startTrial: () => {
        return "trail started";
    },
    getCoupon: (name: "dinhdung10", off: 10) => {
        return 10
    }
}
