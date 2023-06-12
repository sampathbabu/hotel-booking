import { Box, CircularProgress } from "@mui/material";
import Proptypes from "prop-types";
const Loader = ({ isShown }) => {
  return (
    <Box
      position={"absolute"}
      top="0"
      left={"0"}
      width={"100%"}
      height="100%"
      display={isShown ? "flex" : "none"}
      justifyContent="center"
      alignItems={"center"}
      zIndex={100}
      bgcolor={"grey"}
      sx={{ opacity: "0.7" }}
    >
      <CircularProgress sx={{ color: "greenyellow" }} />
    </Box>
  );
};

export default Loader;

Loader.propTypes = {
  isShown: Proptypes.bool,
};
