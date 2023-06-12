import { Button, Grid, TextField, Box } from "@mui/material";
import propTypes from "prop-types";
import { useEffect, useState } from "react";

/*
inputs={
  "Email":{
    regex:vvv,
    type:"text",
          startIcon: AlternateEmail,
          helperText: "Invalid email",
  }
}
*/
const FormField = ({ inputs, onSubmit, values, setValues }) => {
  // console.log(inputs);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setValues(() => {
      const labels = Object.keys(inputs);
      return labels.reduce((acc, current) => {
        acc = { ...acc, [current]: "" };
        return acc;
      }, {});
      // const temp = inputs.map((val) => ({ [val.label]: "" }));
      // return temp.reduce((acc, current) => {
      //   acc = { ...acc, ...current };
      //   return acc;
      // }, {});
      // console.log(temp)
      // console.log({...temp})
      // return {...temp};
    });
  }, []);
  useEffect(() => {
  }, [values]);
  // console.log(values);
  const isValidFields = () => {
    const labels=Object.keys(inputs);
    const lengthOfFields=Object.keys(values).length==0 && Object.keys(errors).length==0;
    if(lengthOfFields) return false;  
    for (let index = 0; index < labels.length; index++) {
      const key = labels[index];
      if(values[key].length==0 || errors[key].length>0) return false;
    }
    return true;
  };
  const isValidValue = (regex, value) => {
    const regExp = new RegExp(regex);
    return regExp.test(value);
  };
  useEffect(() => {
    // console.log(isValidFields());
    // console.log("ERRORS",errors,values);
    setDisabled(isValidFields() ? false : true);
  }, [errors]);
  return (
    <Grid container direction={"column"} rowGap={2}>
      {Object.keys(inputs).map((label) => {
        const textField = inputs[label];
        return (
          <Box key={label} display="flex" alignItems={"center"}>
            {textField.startIcon && <textField.startIcon />}

            <TextField
              inputProps={{
                style: {
                  height: "1rem",
                  borderRadius: "20px",
                },
              }}
              sx={{ ml: "0.2rem" }}
              type={textField.type ?? "text"}
              error={
                errors[label]?.length > 0
                // values[textField.label]?.length > 0 &&
                // !isValidValue(textField.regEx, values[textField.label] ?? "")
              }
              helperText={
                errors[label]
                // values[textField.label]?.length > 0 &&
                // !isValidValue(textField.regEx, values[textField.label] ?? "")
                //   ? textField.helperText
                //   : ""
              }
              onChange={(e) => {
                const valid = isValidValue(textField.regEx, e.target.value);
                // console.log(valid);
                setErrors((prev) => ({
                  ...prev,
                  [label]: !valid ? textField.helperText : "",
                }));
                setValues((prev) => ({
                  ...prev,
                  [label]: e.target.value,
                }));
              }}
              label={textField.label}
            />
          </Box>
        );
      })}
      <Button
        sx={{
          textTransform: "capitalize",
          width: "90%",
          my: "1rem",
          alignSelf: "flex-end",
        }}
        variant={"contained"}
        // fullWidth
        disabled={disabled}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default FormField;

FormField.propTypes = {
  inputs: propTypes.array,
};
