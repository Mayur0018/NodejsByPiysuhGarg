const express = require("express");
const user = require("./MOCK_DATA (2).json");
const app = express();
const PORT = 8000;
const fs = require("fs");
//Routes

app.get("/", () => {
  console.log("Mayur Is the Best Coder");
});

app.get("/api/users", (req, res) => {
  return res.json(user);
});

app.get("/user", (req, res) => {
  const html = `<ul>
    ${user.map((users) => `<li>${users.first_name}`)}
    </ul>`;
  res.send(html);
});

// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const userdetails = user.find((user) => user.id === id);
//     return res.send(userdetails);
//   })
//   .post((req, res) => {
//     return res.json({ status: "pending" });
//   })
//   .delete((req, res) => {
//     return res.json({ status: "pending" });
//   })
//   .patch((req, res) => {
//     return res.json({ status: "pending" });
//   });

app.use(express.urlencoded({ extended: false }));

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userdetails = user.find((user) => user.id === id);
  return res.send(userdetails);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  user.push({ ...body, id: user.length + 1 });
  fs.writeFile("./MOCK_DATA (2).json", JSON.stringify(user), (err, data) => {
    return res.json({ status: "pending" });
  });
});

app.delete("/api/users", (req, res) => {
  return res.json({ status: "pending" });
});

app.patch("/api/user", (req, res) => {
  return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Serve Was Started Port: ${PORT}`));
