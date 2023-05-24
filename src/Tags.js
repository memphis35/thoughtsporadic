import './Tags.css'

function Tags({fetchPosts, initialTags}) {
    const markTag = event => {
        const previousTag = document.getElementById('marked-tag');
        const tagName = event.target.innerText;
        if (previousTag) previousTag.removeAttribute('id');
        if (previousTag?.innerText !== tagName) event.target.id = 'marked-tag';
        fetchPosts(tagName);
    };
    return (
        <div id='tags'>
            {initialTags.map(tag => <span key={tag} className={'tag'} onClick={markTag}>{tag}</span>)}
        </div>
    );
}

export default Tags;