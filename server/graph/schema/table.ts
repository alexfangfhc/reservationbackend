import { gql, makeExecutableSchema } from 'apollo-server-koa';
import { tableCtrl } from '../../controllers/table-ctrl';

const typeDefs = gql`

type table {
    _id: String
    tableNumber: String
    size: Int
    description: String
    isDisabled: Boolean
}

input add_table_input {
    tableNumber: String
    size: Int
    description: String
}


type Query {
    tables: [table]
}

type Mutation{
    updateTable(id: String, status: String): String
    addTable(input: add_table_input): [table]
}
`
const tableSchema = makeExecutableSchema(
    { typeDefs, resolvers: tableCtrl }
)
export { tableSchema };