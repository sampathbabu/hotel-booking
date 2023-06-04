import {Button, Grid, TextField } from "@mui/material";
import FormField from "../../components/Form";

const Login = () => {
  return (
    <FormField inputs={["nfads"]} />
    // <Form inputs={[
    //     {
    //     label:"Email",
    //     regEx: /.com/,
    //     helperText: 'Invalid email',
    //     }
    // ]} />
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
