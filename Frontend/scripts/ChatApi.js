import axios from "axios";

export const getGemniResponse = async (query) => {
  try {
    const response = await axios.post("http://localhost:3000/chat", { query });
    return response.data.result;
  } catch (e) {
    console.log(e);
  }
};
