import React from "react";
type StarType={
    selected:boolean
    value:number
    setValue:(value:number)=>void
}
export function UncontrolledStar(props:StarType) {
   return <span onClick={()=>{props.setValue(props.value)}}>{props.selected?<b> Star</b>: " Star"}</span>

    // if (props.selected === true) {
    //     return <span><b>Star</b></span>
    // } else {
    //     return <span>Star </span>

}