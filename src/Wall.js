import './Wall.css';
import Post from './Post';
import {useState} from 'react';

function Wall({chosenTag}) {
    const [posts, setPosts] = useState([]);
    fetch(`http://localhost:8080/posts${chosenTag ? `/tag/${chosenTag}` : ''}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }).then(response => response.json())
        .then(data => {
            const rendered = data.map(post => <Post key={post.id}
                                                    path={post.address}
                                                    title={post.title}
                                                    imageSrc={post.image}
                                                    text={post.text}/>);
            setPosts(rendered);
        });
    return (
        <div className='wall'>{posts}</div>
    );
}

export default Wall;