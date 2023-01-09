import events from "events";

const EventEmitter = events.EventEmitter;
const databaseEvents = new EventEmitter();

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Database Task Active");
let countingNumber = 1;

const createManufacturingOrder = async (data) => {
  console.log("Start Transactions");

  console.log("Payload Data", data);

  for await (const eachProcess of [1, 2, 3, 4]) {
    await delay(500);
    console.log("Create Process", eachProcess);
  }

  console.log("------Critical of --", data?.process, "----------");
  await delay(500);
  if (countingNumber % 2 == 0) {
    countingNumber += parseInt(data?.number);
  } else {
    countingNumber += parseInt(data?.number);
    countingNumber *= 2;
  }
  console.log("------End of Critical of --", data?.process, "----------");
  console.log("--------");
  console.log("Number now", countingNumber);
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

export default databaseEvents;
