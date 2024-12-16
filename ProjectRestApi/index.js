const express = require("express");
const user = require("./MOCK_DATA (2).json");
const app = express();
const PORT = 8000;

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
     res.send(html)
});

app.listen(PORT, () => console.log(`Serve Was Started Port: ${PORT}`));
