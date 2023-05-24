export const initialTags = [];
export const initialPosts = [];

export const fetchAllPosts = chosenTag => fetch(`http://localhost:8080/posts${chosenTag ? `/tag/${chosenTag}` : ''}`)
    .then(response => response.json());

const fetchAllTags = () => fetch('http://localhost:8080/tags')
    .then(response => response.json());

fetchAllPosts().then(data => data.forEach(post => initialPosts.push(post)));
fetchAllTags().then(data => data.forEach(tag => initialTags.push(tag)));