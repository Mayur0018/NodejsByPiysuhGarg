const express = require("express");
const app = express();
const PORT = 8000;
const UserRoutes = require("./Routes/user");
const { ConectionMongoDb } = require("./connections");

// middlwarw
ConectionMongoDb(
  "mongodb+srv://mayurnish18:mayur123@cluster0.ks1hcpc.mongodb.net/"
);
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", UserRoutes);

app.listen(PORT, () => console.log(`Serve Was Started Port: ${PORT}`));
 