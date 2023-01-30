import React from 'react';
import {AccordionTitleType} from "./Accordion";

export function AccordionTitle(props:AccordionTitleType) {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    );
}