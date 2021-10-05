import axios from "axios";
import Shoutout from "../models/Shoutout";

const baseUrl: string = process.env.REACT_APP_SHOUTOUT_API_URL || "";
if (!baseUrl) {
  console.error("Missing configL REACT_APP_SHOUTOUT_API_URL");
}

export const fetchAllShoutouts = (): Promise<Shoutout[]> => {
  return axios.get(`${baseUrl}/shoutouts`).then((res) => res.data);
};

export const fetchShoutoutsToOne = (to: string): Promise<Shoutout[]> => {
  return axios
    .get(`${baseUrl}/shoutouts`, {
      params: { to: to },
    })
    .then((res) => res.data);
};

export function addShoutout(newShoutout: Shoutout): Promise<Shoutout> {
  return axios
    .post(`${baseUrl}/shoutouts`, newShoutout)
    .then((res) => res.data);
}
