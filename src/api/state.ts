import axios from "axios";
import { SIMULATION_ENDPOINTS } from "../types/SimulationEndpointEnum";
export async function fetchSimulationState(): Promise<string> {
    return (await axios.get(`${process.env.API_BASE_URL}${SIMULATION_ENDPOINTS.API_STATE}`)).data.odds
}