import express from "express";
import eventQueue from "../configs/queue.config";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    message: "Hello Get All Manufacturing Order",
  });
});

router.post("/", async (req, res) => {
  const payload = req?.body;
  try {
    await eventQueue("create_manufacturing_order", {
      process: parseInt(Math.random() * 500, 10),
    });
  } catch (error) {
    console.error("Event Emitter Fail", error);
  }
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
