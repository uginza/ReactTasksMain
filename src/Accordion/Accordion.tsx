import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionType = {
    titleValue: string
    collapsed: boolean
}
export type AccordionTitleType = {
    title: string
}

export function Accordion(props: AccordionType) {

    return <div>
        <AccordionTitle title={props.titleValue}/>
        {props.collapsed && <AccordionBody/>}
    </div>


   /* if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }

*/
}