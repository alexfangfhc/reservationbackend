import { Context } from "koa";
import { TableModel } from '../adapters/mongodb/models/tables';

export const tableCtrl = {
    Query: {
        async tables(_: any, { input }: any, ctx: Context) {
            const tables = await TableModel.find({})
            return tables;
        }
    },
    Mutation: {
        async updateTable(_: any, { id, status }: any, ctx: Context) {
            await TableModel.updateOne({ _id: id }, { $set: { isDisabled: status } });
            return null;
        },
        async addTable(_: any, { input }: any, ctx: Context) {
            try {
                input.isDisabled = false;
                const result = await TableModel.insertMany(input)
                return result;
            }
            catch (e) {
                return null;
            }
        }
    }
}