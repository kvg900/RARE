import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App Config
//using express package to create instance of the express server
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//middlewares
app.use(express.json()); //after using this whateverver request we will get it will be parsed using json
app.use(cors()); //using this we can access backend from any ip

// api in points
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server started on port :" + port));
