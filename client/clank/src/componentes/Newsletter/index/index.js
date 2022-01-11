import { useQuery } from "react-query";
import newsRequest from "../api/api";

const useSubscribers = (update) => {
  const { data, isLoading } = useQuery(["subscribers", { update }], () =>
    newsRequest()
  );

  console.log(update);

  return {
    newsSubscribers: data,
    isLoading,
  };
};

export { useSubscribers };
