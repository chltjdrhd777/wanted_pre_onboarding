import axios from "./axios";

export async function mailTest() {
  try {
    const res = await axios.get("/test");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

export async function mailCode() {
  const res = await axios.post({});
}
