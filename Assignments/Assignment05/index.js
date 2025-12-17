import express from "express";
import { user_routes } from "./routes/userRoutes.mjs";

const app = express();

app.listen(3000);

app.use(express.json());

app.use("/user", user_routes);
