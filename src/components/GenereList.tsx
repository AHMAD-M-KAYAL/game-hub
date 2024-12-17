import useGenres, { Genre } from "../hooks/useGenres";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { FolderIcon } from "lucide-react";
import GradientCircularProgress from "./GradientCircularProgress";
import { ListItemButton } from "@mui/material";
import React from "react";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  setBoleGenre: Genre | null;
}
const GenereList = ({ onSelectedGenre, setBoleGenre }: Props) => {
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
                        color:
                          e.id === setBoleGenre?.id ? "#212121" : "#9e9e9e",
                        marginLeft: "10px",
                      }}
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
