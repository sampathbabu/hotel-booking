import { Menu } from "@mui/icons-material";
import { Box as MuiBox, Grid, IconButton, styled } from "@mui/material";
import { useState } from "react";
import Logo from "../Logo/index.jsx";
import NavigationTab from "../NavigationTab/index.jsx";
import { navigationLinks } from "./constants";
const Box = styled(MuiBox)(() => ({
  padding: "0",
}));

const Header = () => {
  console.log(Box);
  const [showMenu,setShowMenu]=useState(false);
  return (
    <Grid
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
        display={{ xs: "flex", md: "none" }}
      >
        <IconButton onClick={()=>{
            setShowMenu((prev)=>!prev);
        }} sx={{ color: "white" }}>
          <Menu />
        </IconButton>
       {showMenu &&  <Grid 
          container
          zIndex={100}
          bgcolor="white"
          width={"fit-content"}
          paddingX={0}
          sx={{ color: "black" }}
          direction={"column"}
          position="absolute"
          top={"8vh"}
        >
          {Object.keys(navigationLinks).map((name) => {
            return (
              <Grid item paddingY={"1rem"} key={name}>
                <NavigationTab text={name} link={navigationLinks[name]} />
              </Grid>
            );
          })}
        </Grid>
}
      </Box>

      <Grid item height={"6vh"}>
        <Logo />
      </Grid>
      <Grid item xs>
        <Grid
          container
          height={"100%"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Box component={Grid} item display={{ xs: "none", md: "flex" }}>
            {Object.keys(navigationLinks).map((name) => {
              return (
                <Grid item key={name}>
                  <NavigationTab text={name} link={navigationLinks[name]} />
                </Grid>
              );
            })}
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
