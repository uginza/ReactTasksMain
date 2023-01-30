import React, {useState} from 'react';
import {UncontrolledStar} from "./UncontrolledStar";


export function UncontrolledRating() {
    let[value,setValue]=useState(0)
    return <div>
        <UncontrolledStar selected={value>0}/><button onClick={()=>{setValue(1)}}>x</button>
        <UncontrolledStar selected={value>1}/><button onClick={()=>{setValue(2)}}>x</button>
        <UncontrolledStar selected={value>2}/><button onClick={()=>{setValue(3)}}>x</button>
        <UncontrolledStar selected={value>3}/><button onClick={()=>{setValue(4)}}>x</button>
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