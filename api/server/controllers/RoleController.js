import RoleService from "../services/RoleService";
import Util from "../utils/Utils";
const util = new Util();

class RoleController {
  static async getAllRoles(req, res) {
    try {
      const allRoles = await RoleService.getAllRoles();
      if (allRoles.length > 0) {
        util.setSuccess(200, "Roles found", allRoles);
      } else {
        util.setSuccess(200, "Roles not found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addRole(req, res) {
    const findRole = req.body;
    if (!findRole.roleName || !findRole.roleAccess) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const data = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const angka = "1234567890";
    let randomdata = "";
    let randomangka = "";
    for (let i = 0; i < 4; i++)
      randomdata += data.charAt(Math.floor(Math.random() * data.length));
    for (let i = 0; i < 4; i++)
      randomangka += angka.charAt(Math.floor(Math.random() * angka.length));
    let random = randomdata + randomangka;
    const newRole = {
      roleName: findRole.roleName,
      roleCode: random,
      roleAccess: findRole.roleAccess
    };
    try {
      const createdRole = await RoleService.addRole(res, newRole);
      util.setSuccess(201, "Role Added", createdRole);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateRole(req, res){
    const findRole = req.body;
    const {id} = req.params;
    if(!Number(id)){
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res)
    }
    try {
      const updateRole = await RoleService.updateRole(id, findRole);
      if(!updateRole){
        util.setError(404, `Cannot find role with the ${id}`);
      }else{
        util.setSuccess(200, 'Role Updated',updateRole)
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res) 
    }
  }

  static async getARole (req, res){
    const {id} = req.params;
    if(!Number(id)){
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const theRole = await RoleService.getARole(id);
      if(!theRole){
        util.setError(404, `Cannot find book with the id ${id}`);
      }else{
        util.setSuccess(200, 'Role Found', theRole);
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error);
      return util.send(res)
    }
  }

  static async deleteRole (req, res){
    const {id} = req.params

    if(!Number(id)){
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }
    try {
      const roleToDelete = await RoleService.deleteRole(id);
      if(roleToDelete){
        util.setSuccess(200, 'Role Deleted');
      }else{
        util.setError(404,`Role with the id ${id} cannot be found`);
      }
      return
    } catch (error) {
      
    }
  }
}
export default RoleController;
