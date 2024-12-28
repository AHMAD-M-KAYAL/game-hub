import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const HeadNameTitle = ({ gameQuery }: Props) => {
  const gamesTitle = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <h1>{gamesTitle}</h1>;
};

export default HeadNameTitle;
