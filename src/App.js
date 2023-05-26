import AppBar from "./AppBar";
import Header from "./Header";
import Wall from './Wall';
import Tags from "./Tags";

import './fonts/ubuntu_mono.ttf';

import {useEffect, useState} from "react";

const fetchAllPosts = () => {
    return fetch('http://54.160.87.55:8080/posts')
        .then(response => response.json());
}

const fetchPostsWithTags = (tag) => {
    return fetch('http://54.160.87.55:8080/posts/tag/' + tag)
        .then(response => response.json());
}

const fetchPosts = tag => {
    return tag === ''
        ? fetchAllPosts()
        : fetchPostsWithTags(tag);
}

export const fetchAllTags = () => {
    return fetch('http://54.160.87.55:8080/tags')
        .then(response => response.json());
}

function App() {
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const fetchPostsAndSet = chosenTag => fetchPosts(chosenTag).then(data => setPosts(data));
    useEffect(() => {
        fetchAllPosts().then(posts => setPosts(posts))
    }, []);
    useEffect(() => {
        fetchAllTags().then(tags => setTags(tags));
    }, []);
    return (
        <div className='page'>
            <Header/>
            <Tags fetchPosts={fetchPostsAndSet} tags={tags}/>
            <Wall posts={posts}/>
            <AppBar/>
        </div>
    );
}

export default App;
