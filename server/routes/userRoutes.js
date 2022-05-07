const express = require("express");
const router = express.Router();

import { getUsers, createUser } from '../controllers/users.js'

router.get("/get/all", getUsers);

router.post("/new", createUser(req.body));

export default router;