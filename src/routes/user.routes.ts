import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

/**
 * @swagger
 *
 * /api/user/profile:
 *    get:
 *       security:
 *          - Access Token: []
 *       description: Get the current user profile. Requires authentication.
 *       produces:
 *          - application/json
 *       responses:
 *          200:
 *             description: returns a new user object
 *          401:
 *             description: returns an error message if an authorization token is not provided in the request headers
 */
router.get("/profile", (req: Request, res: Response) => {
   if (!req.headers.authorization) {
      return res.status(401).json({ error: { msg: "Unauthorized" } });
   }

   return res.status(200).json({ success: { msg: "Current user profile" } });
});

export default router;
