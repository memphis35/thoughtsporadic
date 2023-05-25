export const fetchAllPosts = chosenTag => fetch(`http://localhost:8080/posts${chosenTag ? `/tag/${chosenTag}` : ''}`)
    .then(response => response.json());

export const fetchAllTags = () => fetch('http://localhost:8080/tags')
    .then(response => response.json());