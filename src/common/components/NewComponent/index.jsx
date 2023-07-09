import { Box, Button, Chip, Rating, Typography } from "@mui/material";
import RoomPic from "../../../assets/sample-room.jpeg";
const NewComponent = ({onAction}) => {
  const imageURL = new URL(RoomPic, import.meta.url).href;
  return (
    <Box
      sx={{
        border: "1px solid grey",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        // maxHeight: "10%",
        minHeight:"25vh",
        maxWidth: "100%",
        // marginX: "0.5rem"
        padding: "0.5rem",
      }}
    >
      <Box sx={{ gridRow: "1/span 1", gridColumn: "1", background: "red" }}>
        <Box
          width={"100%"}
          height="100%"
          sx={{ background: `url(${imageURL})`, backgroundSize: "cover" }}
        ></Box>
      </Box>
      <Box
        sx={{
          gridRow: "1/1",
          gridColumn: "2 /span 2",
        }}
      >
        <Box
          paddingX={"1rem"}
          display={"flex"}
          height={"100%"}
          flexDirection="column"
          justifyContent={"space-around"}
        >
          <Typography alignSelf={"start"} fontWeight="bold">
            King Size BedRoom
          </Typography>
          <Typography
            fontStyle="italic"
            display={"-webkit-box"}
            overflow="hidden"
            sx={{ WebkitLineClamp: "2", WebkitBoxOrient: "vertical" }}
            textOverflow={"ellipsis"}
          >
            First of them is clearly highlighting the most crucial features of a
            room, especially room size and the maximum number of guests. Bed
            configuration, extra bed options, air conditioning are also
            important. Each hotel has a slightly different list that can also
            include details such
          </Typography>
          <Box display={"flex"}>
            {" "}
            <Chip
              label="Wifi"
              sx={{ width: "fit-content", marginRight: "0.4rem" }}
            ></Chip>
            <Chip
              label="Breakfast"
              sx={{ width: "fit-content", marginRight: "0.4rem" }}
            ></Chip>
            <Chip label="+2"></Chip>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderLeft: "1px solid grey",
          gridRow: "1/1",
          gridColumn: "4",
          //    background:'orange'
        }}
      >
        <Box
          marginLeft="0.5rem"
          width={"100%"}
          height="100%"
          justifyContent={"space-around"}
          //   bgcolor={"red"}
          display={"flex"}
          flexDirection="column"
        >
          <Typography fontSize={"10px"}>
            <Typography fontWeight={"bold"}>Rating</Typography>
            <Rating readOnly value={4.5} precision={0.5} size="small" />
            (2.4k)
          </Typography>
          <Button onClick={()=>{onAction()}}
            variant="contained"
            sx={{ textTransform: "capitalize", width: "fit-content" }}
          >
            Check availability
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewComponent;
