import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
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
  const controller = new AbortController();
  useEffect(() => {
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((e) => {
        setListGames(e.data.results);
      })
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return { listGames, errorMessage };
};

export default useGames;
