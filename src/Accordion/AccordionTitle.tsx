import React from 'react';
import {AccordionTitleType} from "./Accordion";

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <div>
            <p onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</p>
        </div>
    );
}