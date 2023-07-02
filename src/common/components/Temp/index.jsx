import {
  Grid,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Calendar } from "react-multi-date-picker";
import BG from "../../../assets/bg1-hotel.jpeg";
import { useEffect, useRef, useState } from "react";
import { RoomsJSON } from "../../constants";
import { useRecoilState, useRecoilValue } from "recoil";
import { roomSelect } from "../../../store";
import { useNavigate } from "react-router-dom";
const Temp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const matchSmallDevice = useMediaQuery(theme.breakpoints.up("sm"));
  const [roomDetails, setRoomDetails] = useRecoilState(roomSelect);
  const da = new Date();
  console.log(`${da.getDate()}/${da.getMonth() + 1}/${da.getFullYear()}`);
  const [dates, setDates] = useState({
    checkIn: "",
    checkOut: "",
  });
  const [showCalendar, setShowCalender] = useState(false);
  const ref = useRef();
  console.log(new URL(BG, import.meta.url));
  const imageURL = new URL(BG, import.meta.url).href;
  console.log(imageURL);
  return (
    <Box
      width={"100%"}
      height={"inherit"}
      display="flex"
      sx={{
        backgroundImage: `url(${imageURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        onClick={(e) => {
          console.log("Grid root click-----------------------__-----_----_--");
          setShowCalender(false);
        }}
        container
        justifyContent={"center"}
        flexDirection="column"
        alignItems="center"
        width="100%"
        height="inherit"
        paddingBottom={"10%"}
        sx={{ backdropFilter: "blur(5px)" }}
      >
        <Grid
          item
          marginBottom={"1rem"}
          sx={{
            opacity: "0.8",
            background: "white",
            marginX: "1rem",
            padding: matchSmallDevice ? "3% 7%" : "5vh 7%",
            borderRadius: "10px",
            boxShadow: "2px -2px 20px 2px grey",
          }}
        >
          <Grid
            columnGap={2}
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              xs={"12"}
              md={"auto"}
              item
              onClick={(e) => {
                e.stopPropagation();
                setShowCalender(() => {
                  return true;
                });
              }}
              marginY={"0.5rem"}
              height={"fit-content"}
            >
              <TextField
                fullWidth
                autoComplete="off"
                value={dates.checkIn}
                InputProps={{
                  style: {
                    height: "3rem",
                  },
                }}
                variant="outlined"
                label="Check-In"
              />
            </Grid>
            <Grid
              xs={"12"}
              md={"auto"}
              item
              onClick={(e) => {
                e.stopPropagation();
                setShowCalender((prev) => {
                  // if(!prev) return prev
                  return true;
                });
              }}
              marginY="0.5rem"
              height={"fit-content"}
            >
              <TextField
                fullWidth
                autoComplete="off"
                value={dates.checkOut}
                InputProps={{
                  style: {
                    height: "3rem",
                  },
                }}
                type={"string"}
                variant="outlined"
                label="Check-Out"
              />
            </Grid>
            <Grid item xs={12} md={"auto"} height={"fit-content"}>
              <Button
                fullWidth
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCalender(false);
                  const supportedFormatStartTime = dates.checkIn
                    .split("-")
                    .reverse()
                    .join("-");
                  const supportedFormatEndTime = dates.checkOut
                    .split("-")
                    .reverse()
                    .join("-");
                  const startDateFormal = new Date(supportedFormatStartTime);
                  const endDateFormal = new Date(supportedFormatEndTime);
                  console.log(
                    "Supported Times: ",
                    supportedFormatStartTime,
                    supportedFormatEndTime
                  );
                  console.log(startDateFormal, endDateFormal);
                  setRoomDetails((prev)=>({
                    ...prev,
                    checkIn: supportedFormatStartTime,
                    checkOut: supportedFormatEndTime,

                  }));
                  if (dates.checkIn.length > 0 && dates.checkOut.length > 0) {
                    navigate("/find-room")
                  }
                }}
                variant="contained"
                disabled={!(dates.checkIn.length>0 && dates.checkOut.length>0)}
                sx={{ textTransform: "capitalize", opacity: "1" }}
              >
                Find Room
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            position: "absolute",
            bottom: matchSmallDevice ? "0vh" : "0vh",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          display={showCalendar ? "flex" : "none"}
          item
        >
          <Calendar
            ref={ref}
            minDate={new Date()}
            numberOfMonths={matchSmallDevice ? 2 : 1}
            range
            rangeHover
            onChange={(datesOnChange) => {
              console.log("DATESSSSS", dates);
              const preDates = {};
              const keys = Object.keys(dates);
              datesOnChange.forEach((date, index) => {
                preDates[
                  keys[index]
                ] = `${date.day}-${date.month.number}-${date.year}`;
              });
              console.log(preDates);
              setDates((prev) => ({ ...prev, ...preDates }));
              // setTemp1(`${firstDate.day}/${firstDate.month.number}/${firstDate.year}`)
              // setTemp2(`${secondDate.day}/${secondDate.month.number}/${secondDate.year}`)
            }}
          />
        </Grid>
        {/* <Grid item width={"100%"}><RoomCard /></Grid> */}
      </Grid>
    </Box>
  );
};
export default Temp;
