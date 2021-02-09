import MidwifeService from '../services/MidwifeService';
import Util from '../utils/Utils';

const util = new Util();

class MidwifeController {

    static async getAllMidwives(req, res){
        try {
            const allMidwives = await MidwifeService.getAllMidwives();
            if(allMidwives.length >0 ){
                util.setSuccess(200, 'Midwives found', allMidwives);
            }else{
                util.setSuccess(200,'Midwives not found');
            }
            return util.send(res)
        } catch (error) {
            util.setError(400, error);
            return util.send(res)
        }
    }

    static async addMidwife(req, res){
        const midwifeValue = req.body
        if(!midwifeValue.midwifeName || !midwifeValue.midwifeAge || !midwifeValue.midwifeDob || !midwifeValue.midwifeGender || !midwifeValue.midwifeTelp || !midwifeValue.midwifeAddress){
            util.setError(400, 'Please provide complete details');
            return util.send(res)
        }
        try {
            const createdMidwife = await MidwifeService.addMidwife(res, midwifeValue);
            util.setSuccess(201, "Midwife added", createdMidwife);
            return util.send(res)
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
}
export default MidwifeController