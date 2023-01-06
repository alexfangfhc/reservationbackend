import { gql, makeExecutableSchema } from 'apollo-server-koa';
import { reservationCtrl } from '../../controllers/reservation-ctrl';

const typeDefs = gql`
scalar Date

type reservation {
    _id: String
    guestName: String
    guestContactInfo: String
    expectedArrivalTime: Date
    reservedTableSize: Int
    reservedTableNumber: String
    status: String
    createdBy: String
    createdUser: String!
    createdAt: Date
    updatedBy: String!
    updatedUser: String!
    updatedAt: Date !
}

input add_reservation_input {
    guestName: String
    guestContactInfo: String
    expectedArrivalTime: Date
    reservedTableSize: Int
    reservedTableNumber: String
    status: String
    createdBy: String
    createdUser: String!
    createdAt: Date
    updatedBy: String!
    updatedUser: String!
    updatedAt: Date !
}

input reservationInput {
    userId: String
}

type Query {
    reservations(input: reservationInput): [reservation]
}

type Mutation{
    updateReservationstatus(id: String, status: String): String
    addReservation(input: add_reservation_input): [reservation]
}
`
const reservationSchema = makeExecutableSchema(
    { typeDefs, resolvers: reservationCtrl }
)
export { reservationSchema };