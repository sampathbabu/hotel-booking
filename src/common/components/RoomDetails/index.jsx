import { Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import RoomPic from "../../../assets/sample-room.jpeg";
import RoomPic2 from "../../../assets/room2.jpeg";
import IncrementButton from "../IncrementButton";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { roomSelect, userStore } from "../../../store";
import { RoomsJSON } from "../../constants";
import { usePostCall } from "../../../services/loginService";
import DialogGuest from "../DialogGuest";
import FormDialog from "../FormDialog";
import { useNavigate } from "react-router-dom";
import { BOOKING, USER } from "../../../store/store.constant";
const RoomDetails = () => {
  const imageURL = new URL(RoomPic, import.meta.url).href;
  const imageURL2 = new URL(RoomPic2, import.meta.url).href;
  const imageList = [imageURL, imageURL2];
  const postCall = usePostCall();
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showGuestDialog, setShowGuestDialog] = useState(false);
  const maxChildCount = 3;
  const minChildCount = 1;
  const minAdultCount = 1;
  const maxAdultCount = 2;
  const roomDetails = useRecoilValue(roomSelect);
  const userDetails = useRecoilValue(userStore);
  const setUserDetails = useSetRecoilState(userStore);
  const navigate = useNavigate();
  console.log(roomDetails);
  const amount = roomDetails["selectedRoom"].price;
  console.log(roomDetails);

  const checkValidAdultChildCount = () => {
    if (adultCount <= maxAdultCount && childCount <= maxChildCount) {
      //Api Call's
      const orderCreate =
        "https://hotel-booking-api-they.onrender.com/api/v1/payment/order/create";
      postCall(orderCreate, {
        amount: amount * 1.18,
      }).then((data) => {
        setUserDetails((user) => ({
          ...user,
          ...data.data.data,
          amountInRupees: amount * 1.18,
        }));
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
          // redirect: true,
          handler: async function (responseRazorPay) {
            const data = {
              response: { ...responseRazorPay },
            };
            setUserDetails((user) => ({ ...user, ...responseRazorPay }));
            const verifyAPI =
              "https://hotel-booking-api-they.onrender.com/api/v1/payment/order/verify";
            const verifyTransaction=(await postCall(verifyAPI, data)).data;
            console.log(verifyTransaction);
            if(verifyTransaction.code==200){
              bookingConfirmationCall(true);
            }
            console.log(data);
            console.log(responseRazorPay);
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
        paymentObject.on("payment.failed", (response) => {
          console.log("IN FAilure",response);
        });
      });
    }
  };
  const checkLoginOrGuest = () => {
    if (Object.keys(userDetails).length > 0) {
      console.log(userDetails);
      setShowLoginDialog(false);
      checkValidAdultChildCount();
    } else {
      setShowLoginDialog(true);
    }
  };
  const checkGuestDialog = (isShown) => {
    setShowGuestDialog(isShown);
  };
  const onSubmitGuestDetails = () => {
    checkGuestDialog(false);
    setShowLoginDialog(false);
    checkValidAdultChildCount();
  };
  const handleGuestButton = () => {
    checkGuestDialog(true);
  };
  const bookingConfirmationCall = (isPaymentSuccess) => {
    return postCall(
      "https://hotel-booking-api-they.onrender.com/api/v1/booking",
      {
        bookingId: userDetails[BOOKING.BOOKING_ID],
        razorpayOrderId: userDetails[BOOKING.RAZOR_PAYMENT_ID]??'',
        amount: amount,
        firstName: userDetails[USER.FIRST_NAME],
        lastName: userDetails[USER.LAST_NAME],
        email: userDetails[USER.EMAIL],
        bookingStatus: isPaymentSuccess,
      }
    );
  };
  return (
    <Grid container display={"flex"}>
      {showLoginDialog && (
        <DialogGuest
          onGuestAction={handleGuestButton}
          onLoginAction={() => {
            console.log(
              ">>>>>>>>>>>>>>>>>>>>>LOGIN>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
            );
            navigate("/login");
          }}
        />
      )}
      {showGuestDialog && <FormDialog onSubmit={onSubmitGuestDetails} />}
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
          <Grid
            mt={2}
            item
            display={"flex"}
            justifyContent="space-between"
            xs={12}
          >
            <Typography>Sub Total: </Typography>
            <Typography>{amount}</Typography>
          </Grid>
          <Grid item display={"flex"} justifyContent="space-between" xs={12}>
            <Typography> Tax: </Typography>
            <Typography fontSize={14}>(+) {amount * 0.18}</Typography>
          </Grid>
          <Grid item display={"flex"} justifyContent="space-between" xs={12}>
            <Typography> Total Amount: </Typography>
            <Typography>{amount * 1.18}</Typography>
          </Grid>
          <Grid item my={2}>
            <Button
              disabled={
                !(minChildCount <= childCount || minAdultCount <= adultCount)
              }
              onClick={() => {
                // checkValidAdultChildCount();
                checkLoginOrGuest();
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
