import Address from "./Address";

export class UserModel {
  public userId: string;
  public name: string;
  public email: string;
  public phone: string;
  public address: Address;
  public bankInfo: string;
  public cashBalance: number;
  public sharesBalance: number;
  public totalBalance: number;

  constructor() {
    this.userId = "";
    this.name = "";
    this.email = "";
    this.phone = "";
    this.address = {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    };
    this.bankInfo = "";
    this.cashBalance = 0;
    this.sharesBalance = 0;
    this.totalBalance = 0;
  }

  setUser = (
    userId: string,
    name: string,
    email: string,
    phone: string,
    address: Address,
    bankInfo: string,
    cashBalance: number,
    sharesBalance: number
  ) => {
    this.userId = userId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.bankInfo = bankInfo;
    this.cashBalance = cashBalance;
    this.sharesBalance = sharesBalance;
    this.totalBalance = this.cashBalance + this.sharesBalance;
  };
}
