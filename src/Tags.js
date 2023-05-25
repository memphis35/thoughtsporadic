import './Tags.css'
import {useState} from "react";
import Tag from "./Tag";

function Tags({fetchPosts, tags}) {
    const [markedTag, setMarkedTag] = useState('');
    const markTag = event => {
        const tagName = event.target.innerText;
        const newTagName = markedTag === tagName ? '' : tagName;
        fetchPosts(newTagName);
        setMarkedTag(newTagName);
    };
    return (
        <div className='tags'>{tags.map(tag => <Tag key={tag} name={tag} isMarked={markedTag === tag} markTag={markTag}/>)}</div>
    );
}

export default Tags;