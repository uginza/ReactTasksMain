import React, {useState} from "react";
import exp from "constants";

export type OnOffButtonType = {
    on: boolean;
    onChange: (on: boolean) => void
}


function OnOffButton(props: OnOffButtonType) {


    const onStyle = {
        width: "70px",
        height: "50px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "1px",
        marginTop: "30px",
        backgroundColor: props.on ? "green" : "white"

    }
    const offStyle = {
        width: "70px",
        height: "50px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "1px",
        marginTop: "30px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "7px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        marginTop: "30px",
        backgroundColor: props.on ? "green" : "red"

    }

    return <div>
        <button style={onStyle} onClick={() => {
            props.onChange(true)
        }}> On
        </button>
        <button style={offStyle} onClick={() => {
            props.onChange(false)
        }}>Off
        </button>
        <div style={indicatorStyle}></div>
    </div>
}

export default OnOffButton;