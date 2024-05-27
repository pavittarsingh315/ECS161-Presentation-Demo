import { Express, Request, Response, NextFunction } from "express";
import swaggerUI from "swagger-ui-express";

import docs from "./documentation";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

export default async (app: Express) => {
   app.get("/health", (_: Request, res: Response, __: NextFunction) => res.sendStatus(200));

   app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

   app.use("/api/auth", authRoutes);
   app.use("/api/user", userRoutes);

   app.use((_: Request, res: Response, __: NextFunction) => res.sendStatus(404));
};
