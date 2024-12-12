import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [listGenre, setListGenre] = useState<Genre[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GameResponse>("/genres", { signal: controller.signal })
      .then((e) => {
        setListGenre(e.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
      });
    return () => controller.abort();
  }, []);

  return { listGenre, errorMessage };
};

export default useGenres;
