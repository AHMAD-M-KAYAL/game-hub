import useGenres, { Genre } from "../hooks/useGenres";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { FolderIcon } from "lucide-react";
import GradientCircularProgress from "./GradientCircularProgress";
import { ListItemButton, Typography } from "@mui/material";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  setBoleGenre: Genre | null;
}
const GenereList = ({ onSelectedGenre, setBoleGenre }: Props) => {
  const { data, errorMessage, isLoading } = useGenres();

  return (
    <>
      {isLoading && (
        <Typography sx={{ marginLeft: "50%" }}>
          <GradientCircularProgress />
        </Typography>
      )}
      {errorMessage && <p>{errorMessage}</p>}
      <List>
        {data.map((e) => {
          return (
            <ListItem key={e.id}>
              <ListItemButton
                onClick={() => onSelectedGenre(e)}
                sx={{
                  borderLeft:
                    e.id === setBoleGenre?.id ? "solid 1px #212121" : "",
                }}
              >
                <ListItemAvatar>
                  <Avatar src={e.image_background}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    paddingLeft: e.id === setBoleGenre?.id ? "10px" : "",
                    color: e.id === setBoleGenre?.id ? "#212121" : "#9e9e9e",
                    marginLeft: "10px",
                  }}
                  primary={e.name}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenereList;
