import database from "../src/models";
import Util from "../utils/Utils"

const util = new Util();

class RoleService {
    static async getAllRoles(){
        try {
            return await database.Role.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async addRole(res, newRole) {
        const cekRoleAccess = await database.Role.findAll({where:{roleAccess:newRole.roleAccess}})
        const roleAccessExist = (await cekRoleAccess.length) >= 1
        if(roleAccessExist){
            util.setError(400, 'Role Access already exist');
            return util.send(res)
        }
        try {
            return await database.Role.create(newRole)
        } catch (error) {
            throw error
        }
    }

    static async updateRole(id, roleValue){
        try {
            const rolerToUpdate = await database.Role.findOne({
                where : {id: Number(id)}
            })
            if(rolerToUpdate){
                await database.Role.update(roleValue, {where: {id:Number(id)}})

                return roleValue
            }
        } catch (error) {
            throw error
        }
    }

    static async getARole(id){
        try {
            const theRole = await database.Role.findOne({
                where : {id: Number(id)}
            })
            return theRole
        } catch (error) {
            throw error
        }
    }

    static async deleteRole(id){
        try {
            const roleToDelete = await database.Role.findOne({where : Number(id)})
            if(roleToDelete){
                const deleteRole = await database.Role.destroy({
                    where : {id:Number(id)}
                })
                return deleteRole;
            }
        } catch (error) {
            throw error;
        }
    }
}
export default RoleService