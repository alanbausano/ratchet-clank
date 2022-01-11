import axios from "axios";

const newsRequest = async () => {
  const result = await axios(`http://localhost:8080/api/items`);
  console.log(result);
  return result.data;
};

export default newsRequest;
