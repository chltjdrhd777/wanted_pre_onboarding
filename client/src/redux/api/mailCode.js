import axios from "./axios";

export async function mailCode(data) {
  return await axios.post("/auth/signup", data);
}
