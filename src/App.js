import AppBar from "./AppBar";
import Header from "./Header";
import Wall from './Wall';
import Tags from "./Tags";

import { initialTags, initialPosts, fetchAllPosts } from './fetchedData.js'

import './fonts/ubuntu_mono.ttf';

import {useState} from "react";

function App() {
    const [posts, setPosts] = useState([]);
    const fetchPosts = chosenTag => fetchAllPosts(chosenTag).then(data => setPosts(data));
    return (
        <div id='page'>
            <Header/>
            <Tags fetchPosts={fetchPosts} initialTags={initialTags}/>
            <Wall posts={posts}/>
            <AppBar/>
        </div>
    );
}

export default App;
