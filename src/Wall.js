import './Wall.css';
import Post from './Post';

function Wall({posts}) {
    return (
        <div className='wall'>{posts.map(post => <Post key={post.id}
                                                       path={post.address}
                                                       title={post.title}
                                                       imageSrc={post.image}
                                                       text={post.text}/>)}</div>
    );
}

export default Wall;