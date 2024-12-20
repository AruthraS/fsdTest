import { Request, Response } from "express";
import { fetchAll } from "../../../models/fetchData";

async function GetHandler(req: Request, res: Response) {
  try {
    const result = await fetchAll();
    console.log(result);
    res.status(200).json({ messages: ["Fetch Success"], data: result.rows });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ messages: ["Internal Server Error"] });
    return;
  }
}

export default GetHandler;