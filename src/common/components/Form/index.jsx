import { Button, Grid, TextField,Box } from "@mui/material";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
const FormField = ({ inputs, onSubmit, values, setValues }) => {
  console.log(inputs);
  useEffect(() => {
    setValues(() => {
      const temp = inputs.map((val) => ({ [val.label]: "" }));
      return temp.reduce((acc, current) => {
        acc = { ...acc, ...current };
        return acc;
      }, {});
      // console.log(temp)
      // console.log({...temp})
      // return {...temp};
    });
  }, []);
  console.log(values);
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
  return (
    <Grid container direction={"column"} rowGap={2}>
      {inputs.map((textField) => (
        <Box key={textField.label} display="flex" alignItems={"center"}>
          {textField.startIcon&& <textField.startIcon  />}
          <TextField
          sx={{ml:"0.2rem"}}
            type={textField.type ?? "text"}
            error={
              values[textField.label]?.length > 0 &&
              !isValidValue(textField.regEx, values[textField.label] ?? "")
            }
            helperText={
              values[textField.label]?.length > 0 &&
              !isValidValue(textField.regEx, values[textField.label] ?? "")
                ? textField.helperText
                : ""
            }
            onChange={(e) => {
              setValues((prev) => ({
                ...prev,
                [textField.label]: e.target.value,
              }));
            }}
            label={textField.label}
          />
        </Box>
      ))}
      <Button
        sx={{ textTransform: "capitalize",my:"1rem" }}
        variant={"contained"}
        fullWidth
        
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
