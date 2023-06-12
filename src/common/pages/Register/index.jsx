import { Box } from "@mui/material";
import FormField from "../../components/Form";
import { useState } from "react";
import { handleRegister } from "../../../services/loginService.js";
import { userStore } from "../../../store";
import { useRecoilState } from "recoil";
import { AccountCircle, AlternateEmail, Key, Phone } from "@mui/icons-material";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({});
  const [user, setUser] = useRecoilState(userStore);
  const [loader, setLoader] = useState(false);
  const navigate=useNavigate()

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
        marginY={"1rem"}
        alignItems={"center"}
        borderRadius={"25px"}
        boxShadow={"1px 1px 20px 5px grey"}
      >
        <Loader isShown={loader} />
        <Box fontWeight={"bold"} fontSize={"20px"}>
          Register
        </Box>
        <Box padding={"7vh"}>
          <FormField
            values={values}
            setValues={setValues}
            onSubmit={() => {
              setLoader(true);
              handleRegister({ ...values }).then((success) => {
                setLoader(false);
                // setStore((prev) => ({ ...prev, user: { ...success.data } }));
                setUser({ ...success.data });
                localStorage.setItem(
                  "user",
                  JSON.stringify({ ...success.data })
                );
                navigate("/")
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
  );
};

export default Register;
