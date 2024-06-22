const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("hello world");
});

router.post("/post", async (req, res) => {
  res.send("Post command");
});

export default router;
