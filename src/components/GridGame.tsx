import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useGames from "../hooks/useGames";
const Item = styled(Paper)(({}) => ({})); //this function to create and style item in Grid
const GridGame = () => {
  const { listGames, errorMessage } = useGames();
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
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
    </>
  );
};

export default GridGame;
