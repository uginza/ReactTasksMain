import React from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import {Rating} from "./Rating/Rating";
import OnOffButton from "./onOffButton/onOffButton";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Menu2"} collapsed={false}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            <UncontrolledRating/>
            <OnOffButton/>
            <OnOffButton/>
            <OnOffButton/>
        </div>
    );
}

export default App;
