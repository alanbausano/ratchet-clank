import axios from "axios";

const newsRequest = async () => {
  const result = await axios(`/api/items`);
  console.log(result);
  return result.data;
};

export default newsRequest;
