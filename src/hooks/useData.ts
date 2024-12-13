import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endPoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 useEffect(() => {
     const controller = new AbortController();
     setIsLoading(true);
     apiClient
       .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
       .then((e) => {
        setData(e.data.results);
         setIsLoading(false);
       })
       .catch((err) => {
         if (err instanceof CanceledError) return;
         setErrorMessage(err.message);
         setIsLoading(false);
       });
     return () => controller.abort();
   }, []);

  return { data,isLoading,  errorMessage };
};

export default useData;
