import React from "react";
type StarType={
    selected:boolean
}
export function UncontrolledStar(props:StarType) {
   return <span>{props.selected?<b>Star</b>:"Star"}</span>

    // if (props.selected === true) {
    //     return <span><b>Star</b></span>
    // } else {
    //     return <span>Star </span>

}