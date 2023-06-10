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
    <Box
      height={"inherit"}
      width="100%"
      display={"flex"}
      alignItems="center"
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        padding={"6vh"}
        flexDirection="column"
        alignItems={"center"}
        // bgcolor={"#c6f68d"}
        marginY={"1rem"}
        bgcolor="#FFEBEE"
        borderRadius={"25px"}
        boxShadow={"1px 1px 20px 5px grey"}
      >
        <Box fontWeight={"bold"} fontSize={"20px"}>
          Sign In
        </Box>
        <Box padding={"1vh"}>
          <FormField
            values={values}
            setValues={setValues}
            onSubmit={() => {
              handleLogin({ ...values }).then((success) => {
                setStore((prev) => ({ ...prev, user: { ...success.data } }));
                localStorage.setItem(
                  "user",
                  JSON.stringify({ ...success.data })
                );
              });
            }}
            inputs={{
              email: {
                label: "Email",
                regEx: /.com/,
                type: "text",
                startIcon: AlternateEmail,
                helperText: "Invalid email",
              },
              password: {
                label: "Password",
                type: "password",
                startIcon: Key,
                regEx: /.{6,}/,
                helperText: "Invalid password",
              },
            }}
          />
        </Box>
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
