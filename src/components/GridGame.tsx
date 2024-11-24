import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export interface Games {
  id: number;
  name: string;
  background_image: string;
}
interface GameResponse {
  count: number;
  results: Games[];
}
const Item = styled(Paper)(({ theme }) => ({})); //this function to create and style item in Grid
const GridGame = () => {
  const [listGames, setListGames] = useState<Games[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    apiClient
      .get<GameResponse>("/games")
      .then((res) => setListGames(res.data.results))
      .catch((err) => setErrorMessage(err.message));
  }, []);
  return (
    <Grid container spacing={3}>
      {listGames.map((oneGame) => (
        <Grid size={4}>
          <Item>
            <GameCard game={oneGame} />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridGame;
