import { FiFilter } from "react-icons/fi";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { useState } from "react";
interface Props {
  onSelectOrder: (order: string) => void;
  orderName: { value: string };
}
const SortGames = ({ onSelectOrder, orderName }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sortType = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Released data",
      value: "-released",
    },
    {
      label: "Added",
      value: "-added",
    },
    {
      label: "Created",
      value: "created",
    },
    {
      label: "Updated",
      value: "updated",
    },
    {
      label: "Rating",
      value: "-rating",
    },
    {
      label: "Papularity",
      value: "-metacritic",
    },
    {
      label: "Revelance",
      value: "",
    },
  ]; //findOrder [{label:"",value=""}]
  const findOrder = sortType.filter((e) => {
    return e.value == orderName.value;
  });
  const currentLabel = findOrder.length > 0 ? findOrder[0].label : "Revelance";

  return (
    <Typography>
      <Button
        sx={{ backgroundColor: "rgb(140,136,138,0.1)", color: "black" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/*here we are updating the platform field //NAMR// in webPage when we choose platform */}
        {currentLabel}
        <FiFilter size={18} />
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
        {sortType.map((e) => (
          <MenuItem
            key={e.value}
            onClick={() => {
              onSelectOrder(e.value);
              handleClose();
            }}
          >
            {e.label}
          </MenuItem>
        ))}
      </Menu>
    </Typography>
  );
};

export default SortGames;
