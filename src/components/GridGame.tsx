import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useGames from "../hooks/useGames";
import SkeletonGame from "./SkeletonGame";
const Item = styled(Paper)(({}) => ({})); //this function to create and style item in Grid
const GridGame = () => {
  const { data, errorMessage, isLoading } = useGames();
  const skeletonItem = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {isLoading && (
        <Grid container spacing={3}>
          {skeletonItem.map((oneGame) => (
            <Grid
              key={oneGame}
              size={{ sm: 12, md: 6, lg: 4 }}
              sx={{
                margin: { xs: "auto" },
                minWidth: { xs: "350px", sm: "auto" },
                maxWidth: { xs: "350px", sm: "auto" },
              }}
            >
              <SkeletonGame />
            </Grid>
          ))}
        </Grid>
      )}
      <Grid container spacing={3}>
        {data.map((oneGame) => (
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
