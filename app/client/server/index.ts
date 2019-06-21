//@ts-ignore
const express = require("express");
const expressApp = express();
const next = require("next");
const port = 3000;
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  expressApp.use("/images/", express.static("./public/images"));
  expressApp
    .use(async (req: any, res: any) => {
      handle(req, res);
    })
    .listen(port, (err: any) => {
      if (err) throw err;
      console.log(`🌱 Ready on http://localhost:${port}`);
    });
});
