import zmq from "zeromq";
import dotenv from "dotenv";

dotenv.config({});

const zmqPush = async (task, payload) => {
  // prettier-ignore
  const sock = new zmq.Push

  await sock.bind(process.env.SOCKET_SERVER);
  console.log("Production Queue running at", process.env.SOCKET_SERVER);

  await sock.send(JSON.stringify({ task, payload }));
  console.log("Task Sending ", task);

  await sock.close();
};

export default zmqPush;
