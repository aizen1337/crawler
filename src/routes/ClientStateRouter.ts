import express from "express";
import { getClientState } from "../controllers/stateController";

const router = express.Router();
router.get("/client/state", getClientState);

export default router;
