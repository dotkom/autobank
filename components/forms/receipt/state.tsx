export interface IUserData {
  fullname: string;
  email: string;
  toc: boolean;
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
