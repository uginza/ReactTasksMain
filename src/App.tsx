import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import OnOffButton from "./onOffButton/onOffButton";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {MainType, Rating} from "./Rating/Rating";
import UncontrolledOnOffButton from "./UncontrolledOnOffButton/UncontrolledOnOffButton";

function App() {
    let [rating, setRating] = useState<MainType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on,setOn] =useState<boolean>(false)
    return (
        <div>
            {/* <Accordion title={"Menu2"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <Rating value={rating}
                    onClick={setRating}/>*/}
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            {/*  <UncontrolledRating/>
            <UncontrolledOnOffButton/>
            <UncontrolledOnOffButton/>*/}
             <OnOffButton on={on} onChange={(on)=>setOn(on)}/>
            {/* <UncontrolledRating/>*/}
            {/*<UncontrolledOnOffButton/>*/}

        </div>
    );
}

export default App;
