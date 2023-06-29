import React, { useRef } from "react";
import RoomPic from "../../../assets/sample-room.jpeg";
import RoomPic2 from "../../../assets/room2.jpeg";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import RoomCard from "../RoomCard";
import { ArrowRight, ArrowRightOutlined } from "@mui/icons-material";
import * as Menu from "react-horizontal-scrolling-menu"
import { useNavigate } from "react-router-dom";
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
const ImageCarousel = () => {
  console.log(Menu);
  const {ScrollMenu}=Menu
  const navigate=useNavigate();
  const imageURL = new URL(RoomPic, import.meta.url).href;
  const imageURL2 = new URL(RoomPic2, import.meta.url).href;
  const imageList = [imageURL, imageURL2];
  const divRef = useRef(null);
  const data = [
    {
      imageList,
      price: 1599,
      rating: 4.5,
      action: () => {
        console.log("Clicked element");
      },
    },
    {
      imageList,
      price: 1599,
      rating: 4.5,
      action: () => {
        console.log("Clicked element");
      },
    },
  ];
  return (
    // <div>
    //   <div style={{padding: "1rem 0" }}>1BHK Rooms</div>
    //   <Grid
    //     width="100vw"
    //     id="containerToScroll"
    //     overflow={"scroll"}
    //     paddingRight={"2%"}
    //     paddingY={"1%"}
    //     height="fit-content"
    //     container
    //     bgcolor={"red"}
    //     flexDirection="column"
    //   >
    //     <Grid item display={"flex"} flexDirection="row" columnGap={"1rem"}>
    //       {Array.from(Array(12).keys()).map((item) => {
    //         return <RoomCard key={item.price} data={{ ...item }} />;
    //       })}
    //       <Box>
    //       <IconButton
    //         onClick={() => {
    //           const element = document.getElementById("containerToScroll");
    //           console.log(element.scrollLeft);
    //           element.scrollLeft += 150;
    //           // element.scrollTo({left:1000})
    //         }}
    //         sx={{
    //           // position: "absolute",
    //           position:"absolute",
    //           right: 0,
    //           // position: "relative",
    //           // right: "0",
    //           ":hover": {
    //             background: "white",
    //           },
    //           top: 150,
    //           zIndex: "100",
    //           backgroundColor: "white",
    //         }}
    //       >
    //         <ArrowRightOutlined />
    //       </IconButton>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </div>
    // <div style={{display:"flex"}}>
    <div style={{width:'100%'}}>
      <ScrollMenu>
      {Array.from(Array(12).keys()).map((item,ind) => {
          return <RoomCard onAction={()=>navigate("/book")} itemId={ind} key={item.price} data={{ ...item }} />;
        })} {/* .........Dynamic Id to implement........ */}
      </ScrollMenu>
      {/* <ScrollMenu Header={"1BHK rooms"} RightArrow={<IconButton><ArrowRight /></IconButton>}>
        {Array.from(Array(12).keys()).map((item,ind) => {
          return <RoomCard itemId={ind} key={item.price} data={{ ...item }} />;
        })}
      </ScrollMenu> */}
      </div>
    // </div>
  );
};

export default ImageCarousel;
