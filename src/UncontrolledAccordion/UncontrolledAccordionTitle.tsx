import React from 'react';
import {UncontrolledAccordionTitleType} from "./UncontrolledAccordion";

export function UncontrolledAccordionTitle(props:UncontrolledAccordionTitleType) {
    return (
        <div>
            <p onClick={props.onClick}>{props.title}</p>
        </div>
    );
}