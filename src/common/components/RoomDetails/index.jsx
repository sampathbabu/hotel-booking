import { Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import RoomPic from "../../../assets/sample-room.jpeg";
import RoomPic2 from "../../../assets/room2.jpeg";
import IncrementButton from "../IncrementButton";
const RoomDetails = () => {
  const imageURL = new URL(RoomPic, import.meta.url).href;
  const imageURL2 = new URL(RoomPic2, import.meta.url).href;
  const imageList = [imageURL, imageURL2];
  const [tempIndex, setTempIndex] = useState(0);
  return (
    <Grid container display={"flex"}>
      <Grid item xs={12} sm={4}>
        <Carousel indicators={false} animation={"slide"} interval={2000}>
          {imageList.map((image) => {
            return (
              <img
                key={image}
                style={{
                  maxWidth: "100%",
                  objectFit: "fill",
                }}
                src={image}
              />
            );
          })}
        </Carousel>
      </Grid>
      <Grid item sm={"8"} xs={"12"} p={2}>
        <Grid container>
          <Grid item>
            <Typography>About the room</Typography>
            <Typography fontStyle={"italic"} fontSize={"14px"}>
              First of them is clearly highlighting the most crucial features of
              a room, especially room size and the maximum number of guests. Bed
              configuration, extra bed options, air conditioning are also
              important. Each hotel has a slightly different list that can also
              include details such as the window view or the presence of a
              balcony. It is crucial to clearly indicate such features as early
              as on the first list view of all rooms. This is where we, as
              Profitroom, can help hoteliers by properly designing their room
              list. The list should show only the key features in a concise
              form, without any unnecessary text. Guests shouldn't have to read
              such a description – it’s enough to scan it to know the rooms’ key
              features and to compare them.
            </Typography>
          </Grid>
          <Grid item xs={12} my={3}>
            <Typography>
              This category only can accomodate 3 children and 2 adult
            </Typography>
          </Grid>
          {/* <Grid item xs={12} display={"flex"} alignItems={"center"}>
           
          </Grid> */}
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={6} display={"flex"} alignItems={"center"}>
                <Typography>Adults:</Typography>
              </Grid>
              <Grid item xs={6}>
                <IncrementButton
                  currentIndex={tempIndex}
                  setCurrentIndex={setTempIndex}
                  minIndex={0}
                  maxIndex={4}
                />
              </Grid>
              <Grid item xs={6} display={"flex"} alignItems={"center"}>
                <Typography>Children:</Typography>
              </Grid>
              <Grid item xs={6}>
                <IncrementButton
                  currentIndex={tempIndex}
                  setCurrentIndex={setTempIndex}
                  minIndex={0}
                  maxIndex={4}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item my={2}>
            <Button variant="contained" sx={{ textTransform: "capitalize" }}>
              Proceed to Payment
            </Button>
          </Grid>
          {/* <Grid item>
            
            <Typography>Children: </Typography>
            <Typography>Adult: </Typography>
          </Grid> */}
          {/* <Grid item>
            <IncrementButton currentIndex={tempIndex} setCurrentIndex={setTempIndex} minIndex={0} maxIndex={4} />
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoomDetails;
