import './Tags.css'

import {useState} from "react";

function Tags({changeTag}) {
    const markTag = event => {
        const previousTag = document.getElementById('marked-tag');
        const tagName = event.target.innerText;
        if (previousTag) previousTag.removeAttribute('id');
        if (previousTag?.innerText !== tagName) event.target.id = 'marked-tag';
        changeTag(tagName);
    }

    const [tags, setTags] = useState('');

    fetch('http://localhost:8080/tags', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }).then(response => response.json())
        .then(data => {
            const tags = data.map(tag => <span key={tag} className="tag" onClick={markTag}>{tag}</span>);
            setTags(tags);
        });
    return (
        <div id='tags'>
            {tags}
        </div>
    );
}

export default Tags;