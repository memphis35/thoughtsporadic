const baseUrl = 'http://be.thoughtsporadic.com';

export const fetchAllPosts = chosenTag => {
    const postsUrl = baseUrl + '/posts' + (chosenTag ? `/tag/${chosenTag}` : '');
    fetch(postsUrl).then(response => response.json());
}

export const fetchAllTags = () => fetch(baseUrl + '/tags')
    .then(response => response.json());