import { gql } from 'apollo-server-micro'

export const CREATE_RECEIPT = gql`
  mutation Mutation($data: ReceiptCreateInput!) {
    createReceipt(data: $data) {
      id
    }
  }
`
