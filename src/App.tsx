import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import NavBar from "./components/NavBar";
import { Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import { Genre } from "./hooks/useGenres";
import PlatformPage from "./components/PlatformPage";
import { Platform } from "./hooks/useGames";
import SortGames from "./components/SortGames";
import HeadNameTitle from "./components/HeadNameTitle";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// })); //this function to create and style item in Grid
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [myMode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      //@ts-ignore
      mode: myMode,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500, // Updated breakpoint
        md: 650,
        lg: 1000,
        xl: 1536,
      },
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
        <Grid size={12} sx={{ marginBottom: "20px" }}>
          <Box
            sx={{
              height: "50",
              boxShadow:
                "0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0)",
            }}
          >
            <NavBar
              darkMode={darkM}
              searchGames={(search) => {
                setGameQuery({ ...gameQuery, search });
              }}
            />
          </Box>
        </Grid>
        {/* NavBar item */}
        <Grid size={3} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box
            sx={{
              boxShadow: "0 0 0 0",
              borderRadius: "0",
            }}
          >
            {
              <GenereList
                setBoleGenre={gameQuery.genre}
                onSelectedGenre={(genre) =>
                  setGameQuery({ ...gameQuery, genre })
                }
              />
            }
          </Box>
        </Grid>
        {/*AsideBar item */}
        <Grid size={{ xs: 12, lg: 9 }}>
          <Box
            sx={{
              margin: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
              boxShadow: "0 0 0 0",
              borderRadius: "0",
            }}
          >
            <HeadNameTitle gameQuery={gameQuery} />
            <Box
              sx={{
                display: "flex",
                marginBottom: "30px",
              }}
            >
              <PlatformPage
                selectedPlatform={gameQuery.platform} //add var via props
                onSelectPlatform={
                  (platform) => setGameQuery({ ...gameQuery, platform }) //when this handler calls will save the state in selectionPlatform
                }
              />
              <SortGames
                orderName={{ value: gameQuery.sortOrder }}
                onSelectOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Box>
            <GameGrid
              gameQuery={gameQuery} //after edit selectedPlatform we share it to GameGrid to edit the page to show new collection
            />
          </Box>
        </Grid>
        {/*Main item */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
