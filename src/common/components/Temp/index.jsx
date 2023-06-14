import {
  Grid,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Calendar } from "react-multi-date-picker";
import { useEffect, useRef, useState } from "react";
const Temp = () => {
  const theme = useTheme();
  const matchSmallDevice = useMediaQuery(theme.breakpoints.up("sm"));
  const da = new Date();
  console.log(`${da.getDate()}/${da.getMonth() + 1}/${da.getFullYear()}`);
  const [dates, setDates] = useState({
    checkIn: "",
    checkOut: "",
  });
  const [showCalendar, setShowCalender] = useState(false);
  const ref = useRef();
  useEffect(() => {
    console.log(dates);
  }, [dates]);
  return (
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
    >
      <Grid
        onClick={(e) => {
          e.stopPropagation();
          setShowCalender(true);
        }}
        item
        marginBottom={"1rem"}
      >
        <Grid
          columnGap={2}
          container
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>{`Todo: DateValidation, Room cards (Design to finalize)`}</Grid>

          <Grid xs={"12"} md={"auto"} item marginY={"0.5rem"} height={"fit-content"}>
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
          <Grid xs={"12"} md={"auto"} item marginY="0.5rem" height={"fit-content"}>
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
              }}
              variant="contained"
              sx={{ textTransform: "capitalize" }}
            >
              Find Room
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
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
              ] = `${date.day}/${date.month.number}/${date.year}`;
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
  );
};
export default Temp;
