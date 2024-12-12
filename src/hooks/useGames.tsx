import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: string;
}
interface GameResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [listGames, setListGames] = useState<Games[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((e) => {
        setListGames(e.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { listGames, errorMessage, isLoading };
};

export default useGames;
