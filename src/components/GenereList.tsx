import useGenres from "../hooks/useGenres";
const GenereList = () => {
  const { data, errorMessage } = useGenres();
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {data.map((e) => {
        return <div> {e.name} </div>;
      })}
    </>
  );
};

export default GenereList;
