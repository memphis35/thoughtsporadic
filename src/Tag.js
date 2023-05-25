import './Tag.css';

function Tag({name, isMarked, markTag}) {
    return (
        <span className={isMarked ? 'tag marked-tag' : 'tag'} onClick={markTag}>{name}</span>
    );
}

export default Tag;