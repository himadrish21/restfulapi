const express = require('express');
const { getAllUsers, addUser, updateUser, deleteUser, findUser } = require('../controller/user-controller');
const router = express.Router();

router.get("/",getAllUsers);
router.get("/:id",findUser);
router.post("/",addUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports=router;