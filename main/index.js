import express from "express";

import { manufacturingOrder, step } from "./routes";

const app = express();

app.use(express.json({}));

app.use("/api/manufacturing-order", manufacturingOrder);
app.use("/api/steps", step);

app.on("error", (error) => {
  console.error("Application Error", error);
});

app.listen(3200, () => {
  console.log("App Listen on Port 3200");
});

export default app;
