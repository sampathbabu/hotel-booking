import { Box, Button, Grid, TextField } from "@mui/material";
import FormField from "../../components/Form";
import { useContext, useState } from "react";
import { handleLogin } from "../../../services/loginService.js";
import Store from "../../../store";
import { AlternateEmail, Key } from "@mui/icons-material";

const Login = () => {
  const [values, setValues] = useState({});
  const { setStore } = useContext(Store);
  return (
    <Box height={"inherit"} width="100%" display={"flex"} alignItems="center" justifyContent={"center"}>
      <Box >
    <FormField 
      values={values}
      setValues={setValues}
      onSubmit={() => {
        handleLogin({ ...values }).then((success) => {
          setStore((prev) => ({ ...prev, "user":{ ...success.data} }));
          localStorage.setItem("user",JSON.stringify({...success.data}));
        });
      }}
      inputs={[
        {
          label: "email",
          regEx: /.com/,
          type:"text",
          startIcon: AlternateEmail,
          helperText: "Invalid email",
        },
        { label: "password", type:"password", startIcon: Key, regEx: /.{6,}/, helperText: "Invalid password" },
      ]}
    />
    </Box>
    </Box>
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
