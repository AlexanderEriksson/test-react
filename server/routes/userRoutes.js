import { Router } from "express";
const router = Router();

import { getUsers, createUser } from '../controllers/users.js'

router.get("/get/all", getUsers);

router.post("/new", createUser);

export default router;