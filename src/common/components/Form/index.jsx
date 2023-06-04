import {Button, Grid, TextField} from "@mui/material";
import propTypes from "prop-types";
import {useEffect, useState} from "react";
const FormField = ({ inputs,onSubmit,values,setValues }) => {
  console.log(inputs);
  useEffect(()=>{
    setValues(()=>{
      const temp= inputs.map((val)=>({[val.label]:""}));
      return temp.reduce((acc,current)=>{
        acc={...acc,...current};
        return acc;
      }, {})
      // console.log(temp)
      // console.log({...temp})
      // return {...temp};

    })
  },[])
  console.log(values)
  const isValidValue = (regex, value) => {
    console.log(regex);
    console.log(value);
    const regExp = new RegExp(regex);
    console.log(regExp.test(value))
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
        <TextField
          key={textField.label}
          error={values[textField.label]?.length>0&&!isValidValue(textField.regEx, values[textField.label]??"")}
          helperText={
              values[textField.label]?.length>0 &&!isValidValue(textField.regEx, values[textField.label]??"")
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
      ))}
      <Button variant={"contained"} fullWidth onClick={onSubmit}>Submit</Button>
    </Grid>
  );
};

export default FormField;

FormField.propTypes = {
  inputs: propTypes.array,
};
