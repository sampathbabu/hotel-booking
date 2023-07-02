import { ArrowRight } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useRef } from "react";
import { RoomsJSON } from "../../constants";
const Temp2 = () => {
    const scrollDiv=useRef()
    const handleNext=()=>{
        const scrollElement=document.getElementById("scroller");
        scrollElement.scrollBy(100,0)
        // scrollDiv.current.scrollLeft+=100
        // // scrollDiv.current.scrollBy(100,0)
        // console.log({top: scrollDiv.current.scrollTop,left: 100});
        // window.scrollTo({top: scrollDiv.current.scrollTop,left: -100})
        // console.log(scrollDiv.current);
    }
  return (
    <div style={{width: "100vw",overflowX:"auto"}}>
    <div ref={scrollDiv} id="scroller" style={{display:"inline-flex",whiteSpace:"nowrap"}}>
      {Object.keys(RoomsJSON).map((roomNumber) => {
        return (
          <div
            style={{
              width: "500px",
              background: "orange",
              borderRight: "1px solid white",
              borderBottom: "1px solid white",
              height: "150px",
            }}
            key={roomNumber}
          >
            {roomNumber}
          </div>
        );

      })}
    </div>
    <IconButton onClick={()=>{handleNext()}}><ArrowRight /></IconButton>
    </div>
  );
};

export default Temp2;
