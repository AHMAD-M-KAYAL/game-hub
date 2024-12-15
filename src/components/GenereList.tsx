import useGenres, { Genre } from "../hooks/useGenres";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { FolderIcon } from "lucide-react";
import GradientCircularProgress from "./GradientCircularProgress";
import { ListItemButton } from "@mui/material";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenereList = ({ onSelectedGenre }: Props) => {
  const { data, errorMessage, isLoading } = useGenres();
  return (
    <>
      {isLoading && <GradientCircularProgress />}
      {errorMessage && <p>{errorMessage}</p>}
      {data.map((e) => {
        return (
          <div key={e.id}>
            <List>
              {
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      onSelectedGenre(e);
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src={e.image_background}>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ marginLeft: "10px" }}
                      primary={e.name}
                    />
                  </ListItemButton>
                </ListItem>
              }
            </List>
          </div>
        );
      })}
    </>
  );
};

export default GenereList;
