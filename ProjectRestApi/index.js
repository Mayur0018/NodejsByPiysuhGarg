const express = require("express");
const user = require("./MOCK_DATA (2).json");
const app = express();
const PORT = 8000;
const fs = require("fs");
const UserRoutes = require("./Routes/user");
const { ConectionMongoDb } = require("./connections");

// middlwarw
ConectionMongoDb(
  "mongodb+srv://mayurnish18:mayur123@cluster0.ks1hcpc.mongodb.net/"
);

app.use(express.urlencoded({ extended: false }));
//Routes

app.use("/user", UserRoutes);

// app.use((req,res,next)=>{
//   console.log("Hello From Middlware 1");
//   // next();
//   return res.json({msg : "Hellow From MiddleWare 1"})
// })

// app.use((req,res,next)=>{
//   console.log("Hello From Middlware");
// })

app.listen(PORT, () => console.log(`Serve Was Started Port: ${PORT}`));
