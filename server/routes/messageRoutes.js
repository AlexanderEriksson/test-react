const express = require("express");
const router = express.Router();

import {getMessages, createMessage} from '../controllers/messages.js'

router.get("/get/all", getMessages);

router.post("/new", createMessage(req.body));

export default router;