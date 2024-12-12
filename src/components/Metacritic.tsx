import { Typography } from "@mui/material";
interface Props {
  critic: string;
}
const Metacritic = ({ critic }: Props) => {
  return (
    <Typography
      sx={{
        backgroundColor: parseInt(critic) >= 90 ? "#b2ebf2" : "#e573734d",
        color: parseInt(critic) >= 90 ? "green" : "red",
        borderRadius: "10%",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {critic}
    </Typography>
  );
};

export default Metacritic;
