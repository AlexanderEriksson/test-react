import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("App working")
});

export default router;