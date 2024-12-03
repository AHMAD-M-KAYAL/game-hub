import {
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { IoLogoAndroid } from "react-icons/io";
import { Games } from "./GridGame";

interface Props {
  game: Games;
}
const GameIcons = ({ game }: Props) => {
  const icons: { [key: string]: IconType } = {
    //class to make icons after getting data api
    PC: FaWindows,
    PlayStation: FaPlaystation,
    Xbox: FaXbox,
    "Apple Macintosh": MdPhoneIphone,
    Android: IoLogoAndroid,
    Linux: FaLinux,
    Nintendo: SiNintendo,
    iOS: FaApple,
    Web: BsGlobe,
  };
  return (
    <>
      {game.parent_platforms.map((plat) => {
        const Icon = icons[plat.platform.name];
        return (
          Icon && (
            <>
              <Icon
                key={plat.platform.id}
                size={24}
                style={{ marginRight: 8 }}
              />
            </>
          )
        );
      })}
    </>
  );
};

export default GameIcons;
