import React from "react";
type StarType={
    selected:boolean
}
export function Star(props:StarType) {
    if (props.selected === true) {
        return <span><b>Star</b></span>
    } else {
        return <span>Star </span>
    }

}