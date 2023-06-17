import { Menu } from "@mui/icons-material";
import { Box as MuiBox, Grid, IconButton, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userStore } from "../../../store/index.jsx";
import Logo from "../Logo/index.jsx";

import NavigationTab from "../NavigationTab/index.jsx";
import { navigationLinks } from "./constants";
const Box = styled(MuiBox)(() => ({
  padding: "0",
}));

const Header = ({showHeaderMenu,setHeaderMenu}) => {
  const [user, setUser] = useRecoilState(userStore);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(()=>{
    console.log(showHeaderMenu);
    console.log(showMenu);
  },[showHeaderMenu])
  return (
    <Grid color={"white"}
      container
      width={"100%"}
      paddingY={"0.5rem"}
      paddingX={"0.5rem"}
      bgcolor={"#404041"}
      height="100%"
    >
      <Box
        component={Grid}
        alignItems={"center"}
        item
        xs={1}
        bgcolor="red"
        display={{ xs: "flex", md: "none" }}
      >
        <IconButton
          onClick={() => {
            setShowMenu((prev) => !prev);
            setHeaderMenu(true)
          }}
          sx={{ color: "white" }}
        >
          <Menu />
        </IconButton>
        {showMenu && (
          <Grid
            container
            zIndex={100}
            bgcolor="white"
            width={"60%"}
            paddingX={0}
            sx={{ color: "black" }}
            direction={"column"}
            position="fixed"
            top={"8vh"}
            left="0"
            height="100%"
          >
            {Object.keys(navigationLinks).map((name) => {
              if (
                !Object.keys(user ?? {}).length > 0 ||
                !["register", "login"].includes(name.toLowerCase())
              )
                return (
                  <Grid item paddingY={"1rem"} key={name}>
                    <NavigationTab text={name} link={navigationLinks[name]} />
                  </Grid>
                );
            })}
            {Object.keys(user ?? {}).length > 0 && (
              <Grid item paddingY={"1rem"} key="logout">
                {/* <NavigationTab text={"Logout"} link="/logout" /> */}
                <NavigationTab
                  text={`Hi ${user.firstName ?? "User"}!`}
                  link="/logout"
                />
              </Grid>
            )}
          </Grid>
        )}
      </Box>

      <Grid
        item
        bgcolor={"orange"}
        display={"flex"}
        justifyContent="center"
        xs={"11"}
        md={"auto"}
        height={"6vh"}
      >
        {/* <Box><img
        src={LogoImage}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        alt={"imageLogo"}
      /></Box> */}

        {/* <Box bgcolor={"pink"}> */}
        <Logo />
        {/* </Box> */}
      </Grid>
      <Grid item className="tjstmdflex" xs display={{ xs: "none", md: "flex" }}>
        <Grid
          container
          height={"100%"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Box component={Grid} item display={{ xs: "none", md: "flex" }}>
            {Object.keys(navigationLinks).map((name) => {
              if (
                !Object.keys(user ?? {}).length > 0 ||
                !["register", "login"].includes(name.toLowerCase())
              )
                return (
                  <Grid item key={name}>
                    <NavigationTab text={name} link={navigationLinks[name]} />
                  </Grid>
                );
            })}
            {Object.keys(user ?? {}).length > 0 && (
              <Grid item key="logout">
                {/* <NavigationTab text={"Logout"} link="/logout" /> */}
                <NavigationTab
                  text={`Hi ${user.firstName ?? ""}!`}
                  link="/logout"
                />
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
  // return <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",height:"5vh"}}>
  //     <Box sx={{backgroundColor:"#7e57c2"}}><Logo /></Box>
  //     <Box sx={{display:"flex",flexDirection:"row"}}>
  //     <Box sx={{background: "red"}}>Reservations</Box>
  //     <Box sx={{background: "orange"}}>Reservations</Box>
  //     <Box sx={{background: "pink"}}>Reservations</Box>
  //     <Box sx={{background: "green"}}>Reservations</Box>
  //     <Box sx={{background: "red"}}>Reservations</Box>
  //     </Box>
  // </Box>
};

export default Header;
