type userObject = {
    userId: string;
    email: string;
    bankInfo: string;
    cashBalance: number;
    sharesBalance: number;
}

export class User{
    public userId: string;
    public email: string;
    public bankInfo: string;
    public cashBalance: number;
    public sharesBalance: number;

    constructor() {
        this.userId = '';
        this.email = '';
        this.bankInfo = '';
        this.cashBalance = 0;
        this.sharesBalance = 0;
    }

    setUser = (user: userObject) => {
        this.userId = user.userId;
        this.email = user.email;
        this.bankInfo = user.bankInfo;
        this.cashBalance = user.cashBalance;
        this.sharesBalance = user.sharesBalance;
    }
}