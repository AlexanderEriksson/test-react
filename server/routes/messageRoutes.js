import { Router } from "express";
const router = Router();

import {getMessages, createMessage} from '../controllers/messages.js'

router.get("/get/all", getMessages);

router.post("/new", (req, res) => createMessage(req.body));

export default router;