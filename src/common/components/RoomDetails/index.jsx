import { Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import RoomPic from "../../../assets/sample-room.jpeg";
import RoomPic2 from "../../../assets/room2.jpeg";
import IncrementButton from "../IncrementButton";
import { useRecoilValue } from "recoil";
import { roomSelect } from "../../../store";
import { RoomsJSON } from "../../constants";
import { usePostCall } from "../../../services/loginService";
const RoomDetails = () => {
  const imageURL = new URL(RoomPic, import.meta.url).href;
  const imageURL2 = new URL(RoomPic2, import.meta.url).href;
  const imageList = [imageURL, imageURL2];
  const postCall = usePostCall();
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const maxChildCount = 3;
  const minChildCount = 1;
  const minAdultCount = 1;
  const maxAdultCount = 2;
  const roomDetails = useRecoilValue(roomSelect);
  console.log(roomDetails);
  const amount=roomDetails["selectedRoom"].price
  console.log(roomDetails);
  const checkValidAdultChildCount = () => {
    if (adultCount <= maxAdultCount && childCount <= maxChildCount) {
      //Api Call's
      const orderCreate =
        "https://hotel-booking-api-they.onrender.com/api/v1/payment/order/create";
      postCall(orderCreate, {
        amount: amount*1.18
      }).then((data) => {
        const id = data.data.data.id;
        const amountinPaise = data.data.data.amount;
        console.log(data.data.data);
        console.log("Amount in paise", amountinPaise);
        const options = {
          key: "rzp_test_P6gp1u1QqjYwJK",
          amount: `${amountinPaise}`,
          currency: data.data.data.currency,
          name: "Hotel Booking.",
          description: "Test Transaction room",
          order_id: id,
          handler: async function (responseRazorPay) {
            const data = {
             response: responseRazorPay
            };
            const verifyAPI="https://hotel-booking-api-they.onrender.com/api/v1/payment/order/verify";
            postCall(verifyAPI, data);
            console.log(data);
            console.log(response);
          },
          prefill: {
            name: "Hotel Booking",
            email: "hotelbooking@karthikeya.com",
            contact: "9999999999",
          },
          notes: {
            address: "Andhra Pradesh",
          },
          theme: {
            color: "#61dafb",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
    }
  };
  return (
    <Grid container display={"flex"}>
      <Grid item xs={12} sm={4} pt={2}>
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
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6} display={"flex"} alignItems={"center"}>
                <Typography>Adults:</Typography>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
                <IncrementButton
                  currentIndex={adultCount}
                  setCurrentIndex={setAdultCount}
                  minIndex={0}
                  maxIndex={maxAdultCount}
                />
              </Grid>
              <Grid item xs={6} display={"flex"} alignItems={"center"}>
                <Typography>Children:</Typography>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
                <IncrementButton
                  currentIndex={childCount}
                  setCurrentIndex={setChildCount}
                  minIndex={0}
                  maxIndex={maxChildCount}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid mt={2} item display={"flex"} justifyContent="space-between" xs={12} >
            <Typography>Sub Total: </Typography>
            <Typography>{amount}</Typography>
            </Grid>
            <Grid item display={"flex"} justifyContent="space-between" xs={12} >
            <Typography> Tax: </Typography>
            <Typography fontSize={14}>(+) {amount*0.18}</Typography>
            </Grid>
            <Grid item display={"flex"} justifyContent="space-between" xs={12} >
            <Typography> Total Amount: </Typography>
            <Typography>{amount * 1.18}</Typography>
            </Grid>
          <Grid item my={2}>
            <Button
              disabled={
                !(minChildCount <= childCount || minAdultCount <= adultCount)
              }
              onClick={() => {
                checkValidAdultChildCount();
              }}
              variant="contained"
              sx={{ textTransform: "capitalize" }}
            >
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
