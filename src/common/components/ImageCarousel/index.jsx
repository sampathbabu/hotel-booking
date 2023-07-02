import React, { useEffect, useRef, useState } from "react";
import RoomPic from "../../../assets/sample-room.jpeg";
import RoomPic2 from "../../../assets/room2.jpeg";
import { RoomsJSON } from "../../constants";
import Carousel from "react-material-ui-carousel";
import RoomCard from "../RoomCard";
import { ArrowRight, ArrowRightOutlined } from "@mui/icons-material";
import * as Menu from "react-horizontal-scrolling-menu";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { roomSelect } from "../../../store";
import { Typography } from "@mui/material";
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
const ImageCarousel = ({description, roomList}) => {
  console.log(Menu);
  const { ScrollMenu } = Menu;
  const navigate = useNavigate();
  const imageURL = new URL(RoomPic, import.meta.url).href;
  const imageURL2 = new URL(RoomPic2, import.meta.url).href;
  const imageList = [imageURL, imageURL2];
  const divRef = useRef(null);
  const [roomDetails, setRoomDetails] = useRecoilState(roomSelect);
  const [filteredRooms, setFilteredRooms] = useState([]);
  useEffect(() => {
    console.log(filteredRooms);
  }, [filteredRooms]);
  useEffect(() => {
    const startTime = new Date(roomDetails["checkIn"]).getTime();
    console.log(roomDetails);
    // setFilteredRooms(
    //   Object.keys(RoomsJSON).filter((value) => {
    //     const availableDate = new Date(
    //       RoomsJSON[value].availableDate
    //     ).getTime();
    //     console.log(startTime);
    //     console.log(availableDate);
    //     if (startTime >= availableDate) {
    //       return true;
    //     }
    //     return false;
    //   })
    // );
    setFilteredRooms(roomList)
  }, []);
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
    <div style={{display:"block",flexDirection:"column"}}>
    <Typography marginLeft={"1rem"}>{description}</Typography>
    <div style={{margin:"0rem 1rem", padding:"1rem 1rem", width: "100vw",height:"fit-content", overflowX: "auto" }}>
      <div
        id="scroller"
        style={{ display: "inline-flex", whiteSpace: "nowrap" }}
      >
        {Object.keys(filteredRooms).map((roomNumber, index) => {
          console.log(roomNumber);
          return (
            <div key={roomNumber.price} style={{ marginRight: "2rem" }}>
              <RoomCard
                onAction={() => {
                  setRoomDetails((prev) => ({
                    ...prev,
                    selectedRoom: roomList[roomNumber],
                  }));
                  navigate("/book");
                }}
                itemId={index}
                data={{ ...roomList[roomNumber] }}
              />
            </div>
          );
        })}
      </div>
    </div>
    </div>
    // <div style={{display:"flex"}}>
    // <ScrollMenu>
    //   {filteredRooms.map((item, ind) => {
    //     return (
    //       <RoomCard
    //         onAction={() => {
    //           setRoomDetails((prev)=>({...prev, "selectedRoom": item}))
    //           navigate("/book")}}
    //         itemId={ind}
    //         key={item.price}
    //         data={{ ...RoomsJSON[item] }}
    //       />
    //       // <div key={item}
    //       //   style={{
    //       //     backgroundColor: "red",
    //       //     width: "200px",
    //       //     height: "100px",
    //       //     borderBottom:"1px solid white"
    //       //   }}
    //       // ></div>
    //     );
    //   })}{" "}
    //   {/* .........Dynamic Id to implement........ */}
    // </ScrollMenu>
    // </div>
  );
};

export default ImageCarousel;
