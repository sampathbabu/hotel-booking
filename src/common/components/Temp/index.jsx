import { Grid, TextField, Button } from "@mui/material";
import { Calendar } from "react-multi-date-picker";
import React, { useEffect, useRef, useState } from "react";
const Temp = () => {
  const da = new Date();
  console.log(`${da.getDate()}/${da.getMonth() + 1}/${da.getFullYear()}`);
  const [temp1, setTemp1] = useState("");
  const [temp2, setTemp2] = useState("");
  const [dates, setDates] = useState({
    checkIn: "",
    checkOut: "",
  });
  const [showCalendar, setShowCalender] = useState(false);
  const ref = useRef();
  useEffect(() => {
    console.log(dates);
  }, [dates]);
  //   temp2.setDate(temp2.getDate() + 30);
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
          // e.preventDefault()
          // e.stopPropagation()
        }}
        item
        marginBottom={"1rem"}
      >
        <Grid columnGap={2} container alignItems={"center"}>
          <Grid item height={"fit-content"}>
            <TextField
              autoComplete="off"
              value={dates.checkIn}
              onFocus={(e) => {
                setShowCalender(true);
              }}
              InputProps={{
                style: {
                  height: "3rem",
                },
              }}
              variant="outlined"
              label="Check-In"
            />
          </Grid>
          <Grid item height={"fit-content"}>
            <TextField
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
          <Grid item height={"fit-content"}>
            <Button
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
      <Grid onClick={(e)=>{
        e.stopPropagation()
      }} display={showCalendar ? "flex" : "none"} item>
        {" "}
        <Calendar
          ref={ref}
          minDate={new Date()}
          numberOfMonths={2}
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
    </Grid>
  );
};
export default Temp;
