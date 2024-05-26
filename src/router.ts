import { Express, Request, Response, NextFunction } from "express";

export default async (app: Express) => {
   app.get("/health", (_: Request, res: Response, __: NextFunction) => res.sendStatus(200));

   app.use((_: Request, res: Response, __: NextFunction) => res.sendStatus(404));
};
