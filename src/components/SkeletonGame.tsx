import { Skeleton } from "@mui/material";
const SkeletonGame = () => {
  return (
    <>
      <Skeleton width={"250px"} height={"300px"} />
      <Skeleton animation="wave" width={220} />
      <Skeleton animation="wave" width={230} />
    </>
  );
};

export default SkeletonGame;
