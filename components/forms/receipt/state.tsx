export interface IUserData {
  fullName: string;
  email: string;
}
export interface IReceiptData {
  amount: number;
  occation: string;
  type: "card" | "deposit";
  account: string;
  cardDetails: string;
  responsible_unit: string;
}
export interface IExtraInformationData {
  comments: string;
  attachments: string[];
}
