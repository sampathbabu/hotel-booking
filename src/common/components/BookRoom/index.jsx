import { Grid, TextField,Box,Button } from "@mui/material";
import { useRef } from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";
import Loader from "../Loader";
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
      <Loader />
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
     
    </Grid>
    </Box>
  );
};

export default BookRoom;
