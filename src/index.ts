import axios from 'axios';

export const fetchState = async () => {
    const response = await axios.get(`${process.env.API_BASE_URL}/state`);
    return response.data;
  };
  
  export const fetchMappings = async () => {
    const response = await axios.get(`${process.env.API_BASE_URL}/mappings`);
    return response.data;
  };