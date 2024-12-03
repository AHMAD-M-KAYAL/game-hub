interface Props {
  critic: string;
}
const Metacritic = ({ critic }: Props) => {
  return <div>{critic}</div>;
};

export default Metacritic;
