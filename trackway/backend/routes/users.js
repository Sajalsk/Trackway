import express from 'express';
import { DeleteUser, GetAllUser, GetSingleUser, UpdateUser } from '../controllers/UserControllers.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();

//create Update User
router.put("/:id",verifyUser,UpdateUser);

//create Delete User
router.delete('/:id',verifyUser,DeleteUser);

//create Get Single User
router.get('/:id',verifyUser ,GetSingleUser);

//create Get All User
router.get('/', verifyAdmin, GetAllUser);


export default  router;
