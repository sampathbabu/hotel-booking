import {Button, Grid, TextField } from "@mui/material";
import FormField from "../../components/Form";
import {useState} from "react";
import {handleLogin} from "../../../services/loginService.js";

const Login = () => {
    const [values,setValues]=useState({})
  return (
    <FormField values={values} setValues={setValues} onSubmit={()=>{
        handleLogin({...values}).then((success)=>console.log(success));
    }} inputs={[{
      label:'email',
      regEx:/.com/,
      helperText: "Invalid email",

    },{label:'password',regEx: /.{6,}/,helperText: "Invalid password"}]} />
    // <Grid container bgcolor={"red"}>
    //   <Grid item width={"100%"} height="inherit">
    //     <Grid
    //       container
    //       rowGap={2}
    //       direction="column"
    //       justifyContent="center"
    //       alignItems={"center"}
    //       bgcolor={"orange"}
    //       height
    //     >
    //       <Grid item>
    //         <TextField label="Email"></TextField>
    //       </Grid>
    //       <Grid item>
    //         <TextField label="Password" type={"password"} />
    //       </Grid>
    //       <Grid item>
    //         <TextField label="Mobile" />
    //       </Grid>
    //       <Grid item>
    //         <Button fullWidth variant="contained">
    //           Submit
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default Login;
