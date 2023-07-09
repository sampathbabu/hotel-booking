import { Box } from "@mui/material";
import FormField from "../../components/Form";
import { useState } from "react";
import { handleLogin } from "../../../services/loginService.js";
import  { userStore } from "../../../store";
import { AlternateEmail, Key } from "@mui/icons-material";
import Loader from "../../components/Loader";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [values, setValues] = useState({});
  const [loader,setLoader]=useState(false);
  const [user,setUser]=useRecoilState(userStore)
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
        alignItems={"center"}
        // bgcolor={"#c6f68d"}
        marginY={"1rem"}
        bgcolor="#FFEBEE"
        borderRadius={"25px"}
        boxShadow={"1px 1px 20px 5px grey"}
      >
        <Loader isShown={loader} />
        <Box fontWeight={"bold"} fontSize={"20px"}>
          Sign In
        </Box>
        <Box padding={"1vh"}>
          <FormField
            values={values}
            setValues={setValues}
            onSubmit={() => {
              setLoader(true)
              handleLogin({ ...values }).then((success) => {
                // setStore((prev) => ({ ...prev, user: { ...success.data } }));
                setUser({...success.data});
                setLoader(false);
                localStorage.setItem(
                  "user",
                  JSON.stringify({ ...success.data })
                );
                
                navigate(-1)
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
  );
};

export default Login;
