import { Request, Response } from "express";
import { stateManager } from "../services/stateManager";

export function getClientState(req: Request, res: Response) {
  const activeEvents = stateManager.getActiveEvents();
  console.log(`['/api/client/state']: ${JSON.stringify(activeEvents)}`)
  res.json(activeEvents);
}
