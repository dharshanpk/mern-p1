
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import cors from 'cors'
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.use("/api/products",productRoutes);


  const frontendPath = path.join(__dirname, '/Frontend/dist');

  //Use the client app
  app.use(express.static(frontendPath));
  
  //Render client for any path

  app.get("/",(req,res) => 
    res.sendFile(PassThrough.join(__dirname,"/Frontend/dist/index.html"))

);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on http://localhost:3000");
});
 
//W2mfgrfk0CodFDWi
