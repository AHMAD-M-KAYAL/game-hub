import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import NavBar from "./components/NavBar";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import GridGame from "./components/GridGame";

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
      <Grid container spacing={3}>
        <Grid size={12}>
          <Item
            sx={{
              height: "50",
              boxShadow:
                "0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0),0px 0px 0px 0px rgba(0,0,0,0)",
            }}
          >
            <NavBar darkMode={darkM} />
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
            asside
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
            <GridGame />
          </Item>
        </Grid>
        {/*Main item */}
      </Grid>
    </ThemeProvider>
  );
}

export default App;
