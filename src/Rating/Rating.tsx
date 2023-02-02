import React from 'react';
import {Star} from "./Star";
import {findAllByDisplayValue} from "@testing-library/react";

export type MainType = 0 | 1 | 2 | 3 | 4


type RatingType = {
    value: MainType
    onClick: (value: MainType) => void
}

export function Rating(props: RatingType) {
    return <div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
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
