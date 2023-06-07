import "./App.css";
import Logo from "./common/components/Logo/index.jsx";
import { Box, Grid } from "@mui/material";
import Header from "./common/components/Header/index.jsx";
import BookRoom from "./common/components/BookRoom/index.jsx";
import { Temp } from "./common/components/Temp/index.jsx";
import BG from "./assets/bg.jpeg";
import { useState } from "react";
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import routes from './routes.jsx'
import Store, { useStore } from "./store";
function App() {
  const [date, setDate] = useState(new Date());
  const createStore=useStore()
  return (
    <Store.Provider value={createStore}>
    <BrowserRouter>
    <Grid
      minHeight={"100vh"}
      minWidth={"100vw"}
      paddingX={"0.2rem"}
      boxSizing="border-box"
      container
      direction={"column"}
    >
      <Grid item height="fit-content">
        <Header />
      </Grid>
      <Grid
        item
        flexGrow={7}
        display="flex"
        minHeight={"max-content"}
        paddingX={"0.5rem"}
        sx={{ color: "black",background:{BG} }}
      >
        <Routes>
          {routes.map((route)=><Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
      </Grid>
      <Grid
        item height={"fit-content"}
        bgcolor="green"
        position={"static"}
        bottom="0"
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
    </Store.Provider>
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
