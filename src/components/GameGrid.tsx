import GameCard from "./GameCard";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useGames, { Platform } from "../hooks/useGames";
import SkeletonGame from "./SkeletonGame";
import { Genre } from "../hooks/useGenres";
interface Props {
  selectedGenre: Genre | null;
  selectedPlat: Platform | null; //we should to initail selectedPlat to get games witch type of //selectedPlatform//  and //export it// again to //useEffect// to refreash the component
}
const Item = styled(Paper)(({}) => ({})); //this function to create and style item in Grid
const GameGrid = ({ selectedGenre, selectedPlat }: Props) => {
  const { data, errorMessage, isLoading } = useGames(
    selectedGenre,
    selectedPlat
  ); //here we are sending  data to refreash reUse useEffect to get new list of games
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
      )}
    </>
  );
};

export default GameGrid;
