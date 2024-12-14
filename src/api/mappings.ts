import axios from "axios"; 
import { SIMULATION_ENDPOINTS } from "../types/SimulationEndpointEnum";

export async function fetchMappings(): Promise<Record<string, string>> {
  const response = await axios.get(`${process.env.API_BASE_URL}${SIMULATION_ENDPOINTS.API_MAPPINGS}`);
  const rawMappings = response.data.mappings.split(";");

  const mappings: Record<string, string> = {};
  for (const mapping of rawMappings) {
    const [key, value] = mapping.split(":");
    mappings[key] = value;
  }

  return mappings;
}