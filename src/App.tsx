import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import OnOffButton from "./onOffButton/onOffButton";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {MainType, Rating} from "./Rating/Rating";

function App() {
    let [rating,setRating]=useState<MainType>(0)
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(false)
    return (
        <div>
            <Accordion title={"Menu2"} collapsed={accordionCollapsed} onClick={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <Rating value={rating}
                    onClick={setRating}/>
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
           {/* <UncontrolledRating/>
            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>*/}
            <UncontrolledRating/>
        </div>
    );
}

export default App;
