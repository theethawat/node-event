import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    message: "Hello Get All Manufacturing Order",
  });
});

router.post("/", async (req, res) => {
  const payload = req?.body;
  res.json({
    message: "Hello Create MO",
    payload,
  });
});

router.put("/:id", async (req, res) => {
  res.json({
    message: "Hello Edit MO",
    id: req.params.id,
  });
});

export default router;
