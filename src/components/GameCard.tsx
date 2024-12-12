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
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia /*this is material Ui component to play with imgs */
        component="img"
        height="150"
        image={getNewPhotoSize(game.background_image)} //import imgs from api
        alt="green iguana"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }} /*this is material Ui component to play with DataText */
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ marginBottom: "30px" }}
        >
          {game.name}
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Typography>
            <GameIcons game={game} />
          </Typography>
          <Metacritic critic={game.metacritic} />
        </div>
      </CardContent>
    </Card>
  );
}
