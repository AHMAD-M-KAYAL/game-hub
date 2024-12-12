import useGenres from "../hooks/useGenres";
const GenereList = () => {
  const { listGenre, errorMessage } = useGenres();
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {listGenre.map((e) => {
        return <div> {e.name} </div>;
      })}
    </>
  );
};

export default GenereList;
