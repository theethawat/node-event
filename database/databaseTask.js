import events from "events";

const EventEmitter = events.EventEmitter;
const databaseEvents = new EventEmitter();

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const createManufacturingOrder = async (data) => {
  console.log("Start Transactions");
  await delay(5000);
  console.log("Payload Data", data);

  console.log("Create Process");
  for await (const eachProcess of [1, 2, 3, 4]) {
    await delay(2000);
    console.log("Create Process", eachProcess);
  }

  console.log("Create Process Complete");
  console.log(data?.process);
  console.log("--------");
  return { success: true };
};

const updateDatabase = async (data) => {
  console.log("Start Transactions");
  await delay(5000);
  console.log("Payload Data", data);

  console.log("Update Process");
  for await (const eachProcess of [1, 2]) {
    await delay(2000);
    console.log("Update Process", eachProcess);
  }

  console.log("Update Process Complete");

  return { success: true };
};

databaseEvents.on("create_manufacturing_order", createManufacturingOrder);

databaseEvents.on("update_manufacturing_order", updateDatabase);

console.log("Database Task Active");

export default databaseEvents;
