import React from 'react';
import {Star} from "./Star";

type RatingType={
    value:number
}
export function Rating(props:RatingType) {

    return <div>
        <Star selected={props.value>0}/>
        <Star selected={props.value>1}/>
        <Star selected={props.value>2}/>
        <Star selected={props.value>3}/>
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