import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
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
        <Grid
          key={oneGame.id}
          size={{ sm: 12, md: 6, lg: 4 }}
          sx={{
            margin: { xs: "auto" },
            minWidth: { xs: "350px", sm: "auto" },
            maxWidth: { xs: "350px", sm: "auto" },
          }}
        >
          <Item>
            <GameCard game={oneGame} />
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridGame;
