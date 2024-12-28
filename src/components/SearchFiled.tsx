import { Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";
interface Props {
  searchGame: (findGame: string) => void;
}
export default function SearchFiled({ searchGame }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ display: "inline-block", width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) searchGame(ref.current.value);
      }}
    >
      <TextField
        inputRef={ref}
        placeholder="Search games..."
        fullWidth
        sx={{
          width: { xs: "90%", md: "95%" },
          marginLeft: { md: "20px", lg: "20px" },
          marginTop: "20px",
          "& .MuiOutlinedInput-root": {
            color: "black",
            backgroundColor: "white", // Apply border radius to the wrapper
            borderRadius: "100px", // Rounded corners for the input field
            "& fieldset": {
              borderColor: "#cccccc", // Default border color
            },
            "&:hover fieldset": {
              borderColor: "#cccccc", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              outline: "none",
              borderColor: "#cccccc", // Border color when focused
            },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ color: "black" }}>
                  <CiSearch />
                </Box>
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  );
}
