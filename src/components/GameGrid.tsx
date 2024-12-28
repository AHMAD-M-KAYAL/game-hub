import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useGames from "../hooks/useGames";
import SkeletonGame from "./SkeletonGame";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery | null;
  //we should to initail selectedPlat to get games witch type of //selectedPlatform//  and //export it// again to //useEffect// to refreash the component
}
const Item = styled(Paper)(({}) => ({})); //this function to create and style item in Grid
const GameGrid = ({ gameQuery }: Props) => {
  const { data, errorMessage, isLoading } = useGames(gameQuery); //here we are sending  data to refreash reUse useEffect to get new list of games
  const skeletonItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (data.length === 0) {
    return <p>no games of this type</p>;
  } //if data is empty show paragraph no games to show
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

      {!isLoading && (
        <Grid container spacing={6}>
          {data.map((oneGame) => (
            <Grid key={oneGame.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Item
                sx={{
                  minWidth: { xs: "200px", sm: "230px", md: "200px" },
                  maxWidth: { xs: "300px", sm: "320px", md: "320px" },
                }}
              >
                <GameCard game={oneGame} />
              </Item>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default GameGrid;
