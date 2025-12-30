interface IUser {
    readonly dbId: number,
    email: string,
    userID: number,
    googleId?: number,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

interface IUser {
    githubToken: string
}

interface IAdmin extends IUser {
    role: "admin" | "ta" | "learner"
}

const dinhdung: IAdmin = {
    dbId: 1123,
    email: "tdd@gmail.com",
    userID: 1123,
    githubToken: "github",
    role: "admin",
    startTrial: () => {
        return "trail started";
    },
    getCoupon: (name: "dinhdung10", off: 10) => {
        return 10
    }
}
