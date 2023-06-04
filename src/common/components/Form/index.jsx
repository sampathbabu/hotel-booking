import { Grid, TextField } from "@mui/material";
import propTypes from "prop-types";
import { useState } from "react";
const FormField = ({ inputs }) => {
  console.log(inputs);
  const [values, setValues] = useState({});
  const isValidValue = (regex, value) => {
    const regExp = new RegExp(regex);
    return regExp.test(value);
  };
  //   const temp = [
  //     {
  //       label,
  //       regEx,
  //       errorText,
  //       type,
  //       helperText,
  //       variant,
  //     },
  //   ];
//   return (
//     <Grid container direction={"column"} rowGap={2}>
//       {inputs.map((textField) => (
//         <TextField
//           key={textField.label}
//           error={isValidValue(values[textField.regEx], values[textField.label])}
//           helperText={
//             isValidValue(values[textField.regEx], values[textField.label])
//               ? textField.helperText
//               : ""
//           }
//           onChange={(e) => {
//             setValues((prev) => ({
//               ...prev,
//               [textField.label]: e.target.value,
//             }));
//           }}
//           label={textField.label}
//         />
//       ))}
//     </Grid>
//   );
return <div></div>
};

export default FormField;

FormField.propTypes = {
  inputs: propTypes.array,
};
