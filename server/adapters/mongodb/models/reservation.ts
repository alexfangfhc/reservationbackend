import { Schema, connection } from 'mongoose';

const db = connection.useDb('hiltion_reservation');
const reservationSchema = new Schema(
    {
        guestName: String,
        guestContactInfo: String,
        expectedArrivalTime: Date,
        reservedTableSize: Number,
        reservedTableNumber: String,
        status: String,
        description: String,
        createdBy: String,
        createdAt: Date,
        createdUser: String,
        updatedBy: String,
        updatedAt: Date,
        updatedUser: String,
    },
    {
        collection: 'reservations',
    }
);
export const ReservationModel = db.model('reservations', reservationSchema);