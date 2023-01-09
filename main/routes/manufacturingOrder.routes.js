import express from "express";
import eventQueue from "../configs/queue.config";

const router = express.Router();

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

router.get("/", async (req, res) => {
  res.json({
    message: "Hello Get All Manufacturing Order",
  });
});

router.post("/", async (req, res) => {
  const payload = req?.body;
  let delayCount = 0;
  try {
    for await (const running of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      await eventQueue("create_manufacturing_order", {
        process: parseInt(Math.random() * 500, 10),
      });

      if (Math.floor(Math.random() * 100) % 2 === 0) {
        delay(1000);
        delayCount += 1;
      }
    }
    console.log("Send Success");
    console.log("Counting Number of Delay is", delayCount);
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
