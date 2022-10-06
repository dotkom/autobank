import Navigation from 'src/components/html/form/Navigation'
import React, { Dispatch, SetStateAction } from 'react'

export type UserData = {
  userid?: string
  fullname: string
  email: string
  toc: boolean
}
export type ReceiptData = {
  amount: number
  occasion: string
  type: 'card' | 'deposit'
  account: string
  card: string
  responsible_committee: string
}
export type ExtraData = {
  comments: string
  appendix: string[]
}

export type ReceiptFormData = UserData & ReceiptData & ExtraData

export type CompanyData = {
  organizationNumber: string
  companyName: string
}

export type CompanyUserData = {
  name: string
  email: string
  phone: string
}

export type InvoiceData = {
  occasion: string
  delivery: string
  deliveryAdress?: string
  comments?: string
  isDueDate: boolean
  isPoNumber: boolean
  dueDate: string
  poNumber: string
}

export type InvoiceFormData = CompanyData & CompanyUserData & InvoiceData

export type FormProps<FormData> = {
  setData: Dispatch<SetStateAction<FormData>>
  data: FormData
  navigation: React.ComponentProps<typeof Navigation>
}
