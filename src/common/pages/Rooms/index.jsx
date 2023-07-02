import { Grid } from "@mui/material";
import ImageCarousel from "../../components/ImageCarousel";
import { RoomsJSON } from "../../constants";

const RoomList=()=>{
    return <Grid container>
        <Grid item>
            <ImageCarousel description={RoomsJSON['1BHK'].description} roomList={RoomsJSON['1BHK'].rooms} />
        </Grid>
        <Grid item>
            <ImageCarousel description={RoomsJSON['2BHK'].description} roomList={RoomsJSON['2BHK'].rooms} />
        </Grid>
    </Grid>
}

export default RoomList;