import { Context } from "koa";
import { ReservationModel } from '../adapters/mongodb/models/reservation';
import { TableModel } from '../adapters/mongodb/models/tables';

export const reservationCtrl = {
    Query: {
        async reservations(_: any, { input }: any, ctx: Context) {
            const reservation = await ReservationModel.find({ createdBy: input.userId })
            return reservation;
        }
    },
    Mutation: {
        async updateReservationstatus(_: any, { id, status }: any, ctx: Context) {
            await ReservationModel.updateOne({ _id: id }, { $set: { status } });
            return null;
        },
        async addReservation(_: any, { input }: any, ctx: Context) {
            try {
                const table = await TableModel.findOne({size:{$gte: input.reservedTableSize}});
                input.reservedTableNumber = table.tableNumber;
                const result = await ReservationModel.insertMany(input)
                return result;
            }
            catch (e) {
                return null;
            }
        }
    }
}