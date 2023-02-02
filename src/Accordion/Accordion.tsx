import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


export type AccordionTitleType = {
    title: string
    collapsed:boolean
    onClick:(collapsed:boolean)=>void
}

export function Accordion(props: AccordionTitleType) {

    return <div>
        <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
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