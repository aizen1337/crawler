import express from "express";
import { fetchSimulationState } from "./api/state";
import { fetchMappings } from "./api/mappings";
import { processRawEvent } from "./services/eventProcessor";
import { stateManager } from "./services/stateManager";
import router from './routes/ClientStateRouter'

const app = express();


async function pollSimulationAPI() {
  try {
    const mappings = await fetchMappings();
    const rawState = await fetchSimulationState();
    stateManager.clearEventsCache()
    console.log(`MAPPINGS: ${JSON.stringify(mappings)}`)
    console.log(`STATE: ${rawState}`)
    rawState.split("\n").forEach(rawEvent => {
        const event = processRawEvent(rawEvent, mappings);
        stateManager.updateEvent(event);
    });
  } catch (error) {
    console.error("Error polling simulation API:", error);
  }
}

setInterval(pollSimulationAPI, 1000);

app.use("/api", router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`);
});
