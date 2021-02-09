import database from '../src/models';
import Util from '../utils/Utils'

const util = new Util();

class UserService {
    static async getAllUsers(){
        try {
            return await database.User.findAll({
                include:[
                    { model :database.Role,
                    attributes : ['id','roleName','roleCode','roleAccess']},
                    { model :database.Midwife}
                ],
            });
        }catch(error){
            throw error;
            
        }
    }

    static async addUser(res,newUser) {
        const cekEmail = await database.User.findAll({where:{email:newUser.email}})
        const emailExist = (await cekEmail.length) >= 1
        if(emailExist){
            util.setError(400, 'email already exist');
            return util.send(res)
        }
        try {
            return await database.User.create(newUser);
        } catch (error) {
            throw error
        }
    }

    static async updateUser(id, updateUser) {
        try {
            const userToUpdate = await database.User.findOne({
                where : {id: Number(id)}
            })
            if(userToUpdate) {
                await database.User.update(updateUser, {where: {id:Number(id)}})

                return updateUser;
            }
        } catch (error) {
            throw error
        }
    }

    static async getAUser(id) {
        try {
            const theUser = await database.User.findOne({
                include:[{model :database.Role,}],
                where : {id:Number(id)}
            })
            return theUser
        }catch(error){
            throw error;
        }
    }

    static async loginUser(email) {
        try {
            const findEmail = await database.User.findOne({where : {
                email :email
            }})
            return findEmail
        } catch (error) {
            throw error;
        }
    }
    static async deleteUser(id) {
        try {
           const userToDelete = await database.User.findOne({where : Number(id)})
               if(userToDelete){
                   const deleteUser = await database.User.destroy({
                       where : {id:Number(id)}
                   })
                   return deleteUser;
               } 
        } catch (error) {
            throw error
        }
    }
}
export default UserService