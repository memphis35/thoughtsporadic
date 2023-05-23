import AppBar from "./AppBar";
import Header from "./Header";
import Wall from './Wall';
import Tags from "./Tags";

import './fonts/ubuntu_mono.ttf';

import {useState} from "react";

function App() {
    const [chosenTag, setChosenTag] = useState('');
    const changeTag = (tag) => {
        setChosenTag(tag);
    }
    return (
        <div>
            <Header/>
            <Tags changeTag={changeTag}/>
            <Wall chosenTag={chosenTag}/>
            <AppBar/>
        </div>
    );
}

export default App;
