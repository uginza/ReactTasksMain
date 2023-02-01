import React, {useState} from 'react';
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

export type UncontrolledAccordionType = {
    titleValue: string
}
export type UncontrolledAccordionTitleType = {
    title: string
    onClick:()=>void
}

export function UncontrolledAccordion(props:UncontrolledAccordionType) {
let [collapsed,setCollapsed]=useState(false)
    return <div>
        <UncontrolledAccordionTitle title={props.titleValue} onClick={()=>{setCollapsed(!collapsed)}}/>
        {!collapsed && <UncontrolledAccordionBody/>}
    </div>


   /* if (props.collapsed === true) {
        return <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
        </div>
    } else {
        return <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            <UncontrolledAccordionBody/>
        </div>
    }

*/
}