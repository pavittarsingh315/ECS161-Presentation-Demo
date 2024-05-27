import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

/**
 * @swagger
 *
 * /api/auth/register:
 *    post:
 *       description: API endpoint to register a new user.
 *       produces:
 *          - application/json
 *       parameters:
 *       - name: contact
 *         description: The email or phone of the registerer.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: username
 *         description: The username the registerer chooses.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: name
 *         description: The full name of the registerer.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: The password the registerer chooses.
 *         in: formData
 *         required: true
 *         type: string
 *       responses:
 *          200:
 *             description: returns a new user object
 *          400:
 *             description: returns an error message if any of the required fields are missing
 */
router.post("/register", (req: Request, res: Response) => {
   if (!req.body.contact || !req.body.username || !req.body.name || !req.body.password) {
      return res.status(400).json({ error: { msg: "Please include all fields." } });
   }

   let newUser = {
      contact: req.body.contact,
      username: req.body.username,
      name: req.body.name,
      password: req.body.password,
   };

   return res.status(200).json({ success: { newUser } });
});

export default router;
