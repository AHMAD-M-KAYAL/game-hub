import { GameQuery } from "../App";
import useData from "./useData";
  export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: string;
}
 
const useGames  = (gameQuery:GameQuery|null) =>  useData<Games>("/games",{params:
  {genres:gameQuery?.genre?.id,
  platforms:gameQuery?.platform?.id,
  ordering:gameQuery?.sortOrder,
  search:gameQuery?.search
  }},[gameQuery])
{/*     useGames will sent var in headind(selectedGenre:Genre|null,selectedPlatform:Platform|null)
 in useData and useData receive them and give us result and refreash { data,isLoading,  errorMessage };
 then export { data,isLoading,  errorMessage }; to all components again to use 
 them and do same their works again 
 */}

export default useGames;
