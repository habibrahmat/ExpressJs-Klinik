import { Router } from "express";
import UserController from "../controllers/UserController";
import RoleController from "../controllers/RoleController";
import MidwifeController from "../controllers/MidwifeController";
import CheckAuth from "../middleware/check-auth";
const router = Router();

//===================== start users =====================//
router.get("/users",  UserController.getAllUsers);
router.post("/users", UserController.addUser);
router.get("/users/:id", CheckAuth, UserController.getAUser);
router.put("/users/:id", CheckAuth, UserController.updatedUser);
router.delete("/users/:id", CheckAuth, UserController.deleteUser);
router.post("/login", UserController.loginUser);
//===================== End users =====================//

//===================== Start Roles =====================//
router.get("/roles", CheckAuth, RoleController.getAllRoles);
router.post("/roles", CheckAuth, RoleController.addRole);
router.put("/roles/:id", CheckAuth, RoleController.updateRole);
router.get("/roles/:id", CheckAuth, RoleController.getARole);
// router.get('/roles/cek',RoleController.cekDevice)
//===================== End Roles =====================//


//===================== Start Miwives =====================//
router.get("/midwives",CheckAuth, MidwifeController.getAllMidwives);
router.post("/midwives",CheckAuth, MidwifeController.addMidwife);

//===================== End Miwives =====================//
export default router;
