import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send('To na home');
    // res.render('pages/page');
}

export const dogs = (req: Request, res: Response) => {
    res.send('To na dogs');
    // res.render('pages/page');
}

export const cats = (req: Request, res: Response) => {
    res.send('To na cats');
    // res.render('pages/page');
}

export const fishes = (req: Request, res: Response) => {
    res.send('To na fishes');
    // res.render('pages/page');
}


