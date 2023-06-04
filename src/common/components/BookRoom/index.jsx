import { Grid, TextField,Box,Button } from "@mui/material";
import { useRef } from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";
import TextFieldIcon from "../TextFieldIcon";
const BookRoom = () => {
  const temp1 = new Date();
  const temp2 = new Date();
  const ref=useRef()
  temp2.setDate(temp2.getDate() + 30);
  return (
    <Box onClick={()=>{
    //To Do setting state varialbe to close the calendar.
    }} width="100%" height="inherit">
    <Grid
      container
      bgcolor={"pink"}
      // direction={"column"}
      width={"100%"}
       rowSpacing={0}
      justifyContent={"center"}
      alignItems="center"
      height={"100%"}
    >
{/* <Grid item xs={12}  bgcolor="steelblue">dsa</Grid> */}
{/* <Grid item xs={12} bgcolor="wheat">dsa</Grid> */}
{/* <Grid item >Main container</Grid> */}
<TextFieldIcon label={"Email"} position={"start"}  />
      {/* <Grid item >
        <TextField type={"string"} variant="outlined" label="Check-In" />
      </Grid>
      <Grid item>
        <Button variant="contained" sx={{textTransform:"capitalize"}}>Find Room</Button>
      </Grid>
      <Grid item xs={12}> <Calendar ref={ref} minDate={temp1} numberOfMonths={2} range rangeHover /></Grid> */}
    </Grid>
    </Box>
  );
};

export default BookRoom;
