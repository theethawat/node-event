import express from "express";

const router = express.Router();

router.get("/", async () => {
  res.json({
    message: "Hello Get All Steps ",
  });
});

router.post("/", async (req) => {
  const payload = req?.body;
  res.json({
    message: "Hello Create Step",
    payload,
  });
});

router.put("/:id", async (req) => {
  res.json({
    message: "Hello Edit Step",
    id: req.params.id,
  });
});

export default router;
