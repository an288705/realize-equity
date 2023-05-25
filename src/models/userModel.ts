export class UserModel{
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

    setUser = (userId: string, email: string, bankInfo: string, cashBalance: number, sharesBalance: number) => {
        this.userId = userId;
        this.email = email;
        this.bankInfo = bankInfo;
        this.cashBalance = cashBalance;
        this.sharesBalance = sharesBalance;
    }
}