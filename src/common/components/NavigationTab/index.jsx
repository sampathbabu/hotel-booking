import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import "./index.css"
const NavigationTab = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <Box className={"box"}
      onClick={() => {
        navigate(link);
      }}
    >
      {text}
    </Box>
  );
};

export default NavigationTab;
NavigationTab.propTypes={
    text: PropTypes.element,
    link: PropTypes.element
}