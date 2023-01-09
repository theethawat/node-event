import zmq from "zeromq";
import dotenv from "dotenv";

import databaseEvents from "./databaseTask";

dotenv.config({});

const run = async () => {
  // prettier-ignore
  const sock = new zmq.Pull

  sock.connect(process.env.SOCKET_SERVER);
  console.log("Database Queue Running at port ", process.env.SOCKET_SERVER);

  console.log("Sock", sock);

  for await (const [msg] of sock) {
    console.log("Queue Size", msg.length);
    console.log("work", msg.toString());

    const dataPayload = JSON.parse(msg);
    const taskName = dataPayload?.task;
    const payload = dataPayload?.payload;

    await databaseEvents.emit(taskName, payload);

    console.log("----- Task End ---------");
  }
};

run();
