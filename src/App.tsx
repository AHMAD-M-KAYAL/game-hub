import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import NavBar from "./components/NavBar";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { Genre } from "./hooks/useGenres";
import PlatformPage from "./components/PlatformPage";
import { Platform } from "./hooks/useGames";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
})); //this function to create and style item in Grid

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  ); // initial state hook to store selectedPlatform when you click on
  const [myMode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      //@ts-ignore
      mode: myMode,
    },
  }); //create mytheme to make dark mode
  const darkM = () => {
    // setMode(!myMode);
    if (myMode == "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  }; //condition to check dark and light

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container spacing={0}>
        <Grid size={12}>
          <Item
            sx={{
              height: "50",
              boxShadow:
                "0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0)",
            }}
          >
            <NavBar darkMode={darkM} />
            <PlatformPage
              selectedPlatform={selectedPlatform} //add var via props
              onSelectPlatform={(plat) => {
                setSelectedPlatform(plat); //when this handler calls will save the state in selectionPlatform
              }}
            />
          </Item>
        </Grid>
        {/* NavBar item */}
        <Grid size={3} sx={{ display: { xs: "none", lg: "block" } }}>
          <Item
            sx={{
              boxShadow: "0 0 0 0",
              borderRadius: "0",
            }}
          >
            {
              <GenereList
                setBoleGenre={selectedGenre}
                onSelectedGenre={(genre) => setSelectedGenre(genre)}
              />
            }
          </Item>
        </Grid>
        {/*AsideBar item */}
        <Grid size={{ sm: 12, lg: 9 }}>
          <Item
            sx={{
              boxShadow: "0 0 0 0",
              borderRadius: "0",
            }}
          >
            <GameGrid
              selectedGenre={selectedGenre}
              selectedPlat={selectedPlatform} //after edit selectedPlatform we share it to GameGrid to edit the page to show new collection
            />
          </Item>
        </Grid>
        {/*Main item */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
