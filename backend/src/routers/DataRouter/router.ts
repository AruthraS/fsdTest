import { Router } from "express";
import AddHandler from "./Handlers/AddHandler";
import GetHandler from "./Handlers/GetHandler";
const router = Router();

router.post('/add', AddHandler);
router.post('/fetch', GetHandler);

export default router;