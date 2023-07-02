import { Box, Grid, Button, Rating, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import RoomPic from "../../../assets/sample-room.jpeg";
import RoomPic2 from "../../../assets/room2.jpeg";
/*
  Data fprmat: {
    imageList: [],
    price: number,
    rating: number (precision: 0.5),
    action: booknow,
    (currently)
  }
 */

const RoomCard = ({onAction, data}) => {
  const imageURL = new URL(RoomPic, import.meta.url).href;
  const imageURL2 = new URL(RoomPic2, import.meta.url).href;
  const images = [imageURL, imageURL2];
  return (
    <>
      {/* <Grid
        container
        flexDirection={"column"}
        sx={{
          // position:"absolute",
          // left:"50%",
          // top:"50%",
          padding: "1rem 10px",
          width: "200px",
          boxShadow: "3px 3px 1rem 2px grey",
          borderRadius: "15px",
          height: "200px",
        }}
        bgcolor="white"
      >
        <Grid bgcolor={"red"} item xs={6}>
          <img
            style={{
              width: "100%",
              // height: "50%",
              // backgroundSize:"cover",
              // backgroundRepeat:"no-repeat"
            }}
            src={imageURL}
          />
        </Grid>
        <Grid bgcolor={"pink"} item xs={3}>
          Rating ******
        </Grid>
        <Grid item xs={1}>
          PRICE 1699/-
        </Grid>
        <Grid item xs={"auto"}>
          <Button variant="contained" sx={{ textTransform: "capitalize" }}>
            Book Now
          </Button>
        </Grid>
      </Grid> */}
      <Grid
        container
        flexDirection={"column"}
        sx={{
          padding: "1rem 10px",
          width: "200px",
          // width:"fit-content",
          boxShadow: "1px 1px 0.5rem 1px grey",
          borderRadius: "15px",
          height: "fit-content",
        }}
        bgcolor="white"
      >
        <Grid item height={"50%"}>
          <Carousel indicators={false} animation={"slide"} interval={2000}>
            {images.map((image) => {
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
        <Grid
          item
          display={"flex"}
          alignItems="center"
        >
          <Rating readOnly value={4.5} precision={0.5} size="small" />
        </Grid>
        <Grid
          item
        >
          <Typography fontWeight={"bold"}>{`₹${data['price']}`}</Typography>

          <Typography variant="subtitle1" fontSize={"11px"} marginLeft="5px">
            /per night
          </Typography>
        </Grid>
        <Grid item marginTop={"0.5rem"}>
          <Button
          onClick={()=>{
            onAction()
          }}
            fullWidth
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RoomCard;
