import express, { Express } from "express";

import router from "./router";

const app: Express = express();
const PORT: number = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`);
   router(app);
});
