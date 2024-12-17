import { IoFilterOutline } from "react-icons/io5";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";
interface Props {
  onSelectPlatform: (platform: Platform) => void; //set function the share Platform with App.tsx when you click on Platform
  selectedPlatform: Platform | null; //first time it's null because you are didn't click on platform and it refresh when to choose platform
}
const PlatformPage = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatform(); //here we imports data which usePlatform.tx export it
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Typography
      sx={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}
    >
      <Button
        sx={{ width: "100px", color: "black" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/*here we are updating the platform field //NAMR// in webPage when we choose platform */}
        {selectedPlatform?.name || "Platform"}
        <IoFilterOutline size={30} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {data.map((e) => (
          <MenuItem
            key={e.id}
            onClick={() => {
              onSelectPlatform(e); // Call the selection handler in App.tsx
              handleClose(); // Close the menu
            }}
          >
            {e.name}
          </MenuItem>
        ))}
      </Menu>
    </Typography>
  );
};

export default PlatformPage;
