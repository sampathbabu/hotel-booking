import { Grid } from "@mui/material";
const RoomCard = () => {
  return <Grid justifyContent={"space-between"} container width={"inherit"} minHeight={"6vh"} bgcolor="red">
    <Grid item>
        <Grid container flexDirection={"column"}>
            <Grid item>Room No</Grid>
            <Grid item>Status: Booked</Grid>
        </Grid>
    </Grid>
    <Grid item>Price</Grid>
  </Grid>;
};

export default RoomCard;
