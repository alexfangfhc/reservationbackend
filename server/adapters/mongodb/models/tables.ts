import { Schema, connection } from 'mongoose';

const db = connection.useDb('hiltion_reservation');
const tableSchema = new Schema(
    {
        tableNumber: String,
        size: Number,
        description: String,
        isDisabled: Boolean,
    },
    {
        collection: 'table',
    }
);
export const TableModel = db.model('tables', tableSchema);