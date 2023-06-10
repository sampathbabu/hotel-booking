import { Box, Button, Grid, TextField } from "@mui/material";
import FormField from "../../components/Form";
import { useContext, useState } from "react";
import { handleLogin, handleRegister } from "../../../services/loginService.js";
import Store from "../../../store";
import { AccountCircle, AlternateEmail, Key, Phone } from "@mui/icons-material";

const Register = () => {
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
        bgcolor={"#c6f68d"}
        alignItems={"center"}
        borderRadius={"25px"}
        boxShadow={"1px 1px 20px 5px grey"}
      >
        <Box fontWeight={"bold"} fontSize={"20px"}>
          Register
        </Box>
        <Box padding={"7vh"}>
          <FormField
            values={values}
            setValues={setValues}
            onSubmit={() => {
              handleRegister({ ...values }).then((success) => {
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
              mobile: {
                label: "Mobile",
                type: "number",
                startIcon: Phone,
                regEx: /.{10}/,
                helperText: "Invalid Mobile Number",
              },
              firstName: {
                label: "First Name",
                type: "text",
                startIcon: AccountCircle,
                regEx: /.{2,}/,
                helperText: "Invalid First Name",
              },
              lastName: {
                label: "Last Name",
                type: "text",
                startIcon: AccountCircle,
                regEx: /.{2,}/,
                helperText: "Invalid Last Name",
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

export default Register;
