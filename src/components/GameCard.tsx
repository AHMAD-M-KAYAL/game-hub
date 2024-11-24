import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Games } from "./GridGame";
interface Props {
  game: Games;
}
export default function GameCard({ game }: Props) {
  return (
    <Card sx={{ maxWidth: 345, height: 300 }}>
      <CardMedia
        component="img"
        height="150"
        image={game.background_image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          decreption
        </Typography>
      </CardContent>
    </Card>
  );
}
