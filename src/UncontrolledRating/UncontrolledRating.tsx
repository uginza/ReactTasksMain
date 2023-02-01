import React, {useState} from 'react';
import {UncontrolledStar} from "./UncontrolledStar";


export function UncontrolledRating() {
    let[value,setValue]=useState(0)
    return <div>
        <UncontrolledStar selected={value>0} setValue={setValue} value={1}/>
        <UncontrolledStar selected={value>1} setValue={setValue}value={2}/>
        <UncontrolledStar selected={value>2} setValue={setValue}value={3}/>
        <UncontrolledStar selected={value>3} setValue={setValue}value={4}/>
    </div>



  /*  if (props.value === 1) {
        return <div>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={false}/>
            <UncontrolledStar selected={false}/>
            <UncontrolledStar selected={false}/>
        </div>
    } else if (props.value === 2) {
        return <div>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={false}/>
            <UncontrolledStar selected={false}/>
        </div>
    } else if (props.value === 3) {
        return <div>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={false}/>
        </div>
    } else if (props.value === 4) {
        return <div>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={true}/>
            <UncontrolledStar selected={true}/>
        </div>
    } else {
        return <div>
            <UncontrolledStar selected={false}/>
            <UncontrolledStar selected={false}/>
            <UncontrolledStar selected={false}/>
            <UncontrolledStar selected={false}/>
        </div>

    }
*/

}