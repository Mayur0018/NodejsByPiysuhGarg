const http = require("http");
const fs = require("fs");
const myServe = http.createServer((req, res) => {
  const log = `${Date.now()} :${req.url} New Req Recevied`;
  fs.appendFile("log.txt", log, (err, data) => {

    switch(req.url){
      case "/": res.end("HomePage");
      break
      case "/About" : res.end("About Page")
    }
    // res.end("hellow from server again");
  });
  console.log("im better than all");
  console.log(req);
});

myServe.listen(8000, () => console.log("Server Started"));
