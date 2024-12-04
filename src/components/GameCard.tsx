import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Games } from "../hooks/useGames";
import Metacritic from "./Metacritic";
import GameIcons from "./GameIcons";
import getNewPhotoSize from "../services/getNewPhotoSize";
interface Props {
  //interface to import data  of type(Games) from GridGame and share it again
  game: Games;
}
export default function GameCard({ game }: Props) {
  return (
    //card => this is material Ui component to play with DATA ass all
    //like imgs and text and others
    <Card sx={{ maxWidth: 350, height: 300 }}>
      <CardMedia /*this is material Ui component to play with imgs */
        component="img"
        height="150"
        image={getNewPhotoSize(game.background_image)} //import imgs from api
        alt="green iguana"
      />
      <CardContent /*this is material Ui component to play with DataText */>
        <Typography gutterBottom variant="h5" component="div">
          {/* this is material Ui component to hold data  */}
          {game.name}
        </Typography>
        <GameIcons game={game} />
        <Metacritic critic={game.metacritic} />
      </CardContent>
    </Card>
  );
}
