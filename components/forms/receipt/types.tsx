export type UserData = {
  fullname: string
  email: string
  toc: boolean
}
export type ReceiptData = {
  amount: number
  occation: string
  type: 'card' | 'deposit'
  account: string
  cardDetails: string
  responsible_unit: string
}
export type ExtraInformationData = {
  comments: string
  attachments: string[]
}
