import { gql } from 'mercurius-codegen';

export const schema = gql`
  type Query {
    item(name: String!): [Item!]!
    supplier(id: ID!): Supplier
    reservation(id: ID!): Reservation
  }

  type Mutation {
    createItem(item: CreateItem!): Item!
    updateItem(id: ID!, item: UpdateItem!): Item!
    deleteItem(id: ID!): Item
    createReservation(reservation: CreateReservation!): Reservation!
  }

  type Item {
    id: ID!
    name: String!
    description: String
  }

  type Supplier {
    id: ID!
    companyName: String!
    contactName: String!
    phone: String!
  }

  type Reservation {
    id: ID!
    tableId: ID!
    startTime: String!
    endTime: String!
    phone: String!
  }

  input CreateItem {
    name: String!
    description: String!
  }

  input UpdateItem {
    name: String
    description: String
  }

  input CreateReservation {
    tableId: ID!
    startTime: String!
    endTime: String!
    phone: String!
  }
`;
