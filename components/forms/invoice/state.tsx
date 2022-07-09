export interface ICompanyInformation {
  organizationNumber: string
  companyName: string
}

export interface IContactPerson {
  name: string
  email: string
  phone: string
}

export interface IInvoiceInformation {
  occasion: string
  delivery: string
  deliveryAdress?: string
  comments?: string
  isDueDate: boolean
  isPoNumber: boolean
  dueDate: string
  poNumber: string
}
