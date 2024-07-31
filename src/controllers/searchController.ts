import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {
    res.send('To na search');
    // res.render('pages/page');
}