import React, {useState} from "react";
import exp from "constants";

/*type OnOffButtonType = {
    on: boolean;
}*/


function UncontrolledOnOffButton() {
  const[on,setOn] =useState(false)

    const onStyle = {
        width: "70px",
        height: "50px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "1px",
        marginTop: "30px",
        backgroundColor: on ? "green" : "white"

    }
    const offStyle = {
        width: "70px",
        height: "50px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "1px",
        marginTop: "30px",
        backgroundColor:on? "white" : "red"
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        marginTop: "30px",
        backgroundColor:on ? "green" : "red"

    }

    return <div>
        <button style={onStyle} onClick={()=>{setOn(true)}}>On</button>
        <button style={offStyle} onClick={()=>{setOn(false)}}>Off</button>
        <div style={indicatorStyle}></div>
    </div>
}

export default UncontrolledOnOffButton;