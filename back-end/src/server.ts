import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { IDErouter } from "./routes/IDERoute";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
app.use(express.json());
app.use("/ide", IDErouter);
app.use("/", (req, res) => {
  return res.send("API is working");
});
app.use("/checkapistatus", (req, res) => {
  return res.json({ status: "API is working" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
