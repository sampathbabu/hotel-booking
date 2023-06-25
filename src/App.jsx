import "./App.css";
import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import Header from "./common/components/Header/index.jsx";
import BG from "./assets/bg.jpeg";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes.jsx";
import { RecoilRoot } from "recoil";
function App() {
  const [showHeaderMenu, setHeaderMenu] = useState(false);
  String.prototype.capitalize = () => {
    return this.substring(0).toUpperCase() + this.substring(1);
  };
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <Grid
            minHeight={"100vh"}
            overflow="hidden"
            width={"100vw"}
            maxWidth={"100vw"}
            boxSizing="border-box"
            container
            flexDirection={"column"}
            onClick={(e) => {
              console.log("IN ROOT click!!");
              setHeaderMenu(false);
            }}
          >
            <Grid item width={"100%"} height="fit-content">
              <Header
                setHeaderMenu={setHeaderMenu}
                showHeaderMenu={showHeaderMenu}
              />
            </Grid>
            <Grid
              item
              flexGrow={7}
              display="flex"
              minHeight={"max-content"}
              paddingX={"0rem"}
              sx={{ color: "black", background: { BG } }}
            >
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Grid>
            <Grid
              item
              height={"10vh"}
              bgcolor="green"
              position={"static"}
              bottom="0"
              display={"flex"}
              justifyContent="center" //Temp Properties till we get footer
              alignItems={"center"}
              paddingX={"0.2rem"}
              width={"100%"}
              // flexGrow={1}
              // display="flex"
              // width="100%"
              // height={"100%"}
              // justifyContent="center"
            >
              Footer
            </Grid>
          </Grid>
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  );
  // return (
  //   <Box sx={{minWidth:'97.5vw',height:"100vh",padding:"0 1vw",border:'1px solid orange',position:'relative'}}>
  //   <Box sx={{zIndex:'100',width:"100%",margin:"1rem 0rem",border:"1px solid red",height:"fit-content",position:"sticky",top:'0'}}>
  //       <Header />
  //   </Box>
  //     <Box sx={{height:"200vh"}}><DatePicker value={date} onChange={(date)=>{
  //       setDate(date.format())
  //     }} /></Box>
  //     {/*<Box sx={{width:"100%"}}><BookRoom /></Box>*/}
  //     <Box sx={{height:"8rem",position:"absolute",bottom:'0',width:"100%",backgroundColor:"red"}}></Box>
  //   </Box>
  // )
}

export default App;
