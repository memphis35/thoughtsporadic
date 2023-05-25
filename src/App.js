import AppBar from "./AppBar";
import Header from "./Header";
import Wall from './Wall';
import Tags from "./Tags";

import {fetchAllPosts, fetchAllTags} from './fetchApi.js'

import './fonts/ubuntu_mono.ttf';

import {useEffect, useState} from "react";

function App() {
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const fetchPosts = chosenTag => fetchAllPosts(chosenTag).then(data => setPosts(data));
    useEffect(() => {
        fetchAllPosts().then(posts => setPosts(posts))
    }, []);
    useEffect(() => {
        fetchAllTags().then(tags => setTags(tags));
    }, []);
    return (
        <div className='page'>
            <Header/>
            <Tags fetchPosts={fetchPosts} tags={tags}/>
            <Wall posts={posts}/>
            <AppBar/>
        </div>
    );
}

export default App;
