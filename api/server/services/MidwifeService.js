import database from '../src/models';
import Util from '../utils/Utils';

const util = new Util();

class MidwifeService {
    static async getAllMidwives(){
        try {
            return await database.Midwife.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async addMidwife(res, newMidwife){
        const cekName = await database.Midwife.findAll({
            where : {midwifeName : newMidwife.midwifeName}
        })
        const nameExist = (await cekName.length)>=1
        if(nameExist){
            util.setError(400, 'name already exist');
            return util.send(res)
        }
        try {
            return await database.Midwife.create(newMidwife);
        } catch (error) {
            throw error
        }
    }

    static async updateMidwife(id, updateMidwife){
        try {
            const midwifeToUpdate = await database.Midwife.findOne({
                where : {id: Number(id)}
            })
            if(midwifeToUpdate){
                await database.Midwife.update(updateMidwife, {where: {id: Number(id)}})

                return updateMidwife
            }
        } catch (error) {
            throw error
        }
    }

    static async getAmidwife(id){
        try {
            const theMidwife = await database.Midwife.findOne({
                where: {id: Number(id)}
            })
            return theMidwife
        } catch (error) {
            throw error
        }
    }

    static async deleteMidwife(id){
        try {
            const midwifeToDelete = await database.Midwife.findOne({
                where : {id: Number(id)}
            })
            if(midwifeToDelete){
                const deleteMidwife = await database.Midwife.destroy({
                    where : {id: Number(id)}
                })
                return deleteMidwife
            }
        } catch (error) {
            throw error
        }
    }
}
export default MidwifeService;