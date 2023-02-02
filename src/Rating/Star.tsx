import React from "react";
import {MainType} from "./Rating";

type StarType={
    selected:boolean
    value:MainType
    onClick:(value:MainType)=>void
}
export function Star(props:StarType) {
    return <span onClick={()=>{props.onClick(props.value)}}>{props.selected?<b> Star</b>: " Star"}</span>


}