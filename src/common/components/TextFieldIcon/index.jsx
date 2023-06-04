import { AlternateEmail } from "@mui/icons-material";
import { InputAdornment, TextField, Box } from "@mui/material";
const TextFieldIcon = ({ position, label, value, onChange, ...other }) => {
  return (
    <Box display={"flex"} alignItems="center">
      <AlternateEmail sx={{color:"active.active" ,mr: 1, my: 0.5 }} />
      <TextField size="small" variant="filled" label={label} />
    </Box>
    // <TextField {...other}
    // variant="outlined"
    // label={label}
    //   InputProps={{
    //     startAdornment: (
    //       <InputAdornment position={position}>
    //         <AlternateEmail />
    //       </InputAdornment>
    //     ),
    //   }}
    // />
  );
};

export default TextFieldIcon;
