import './Post.css';
import './fonts/ubuntu_mono.ttf'

export default function Post({path, title, imageSrc, text, altText}) {
    return (
        <section className='post'>
            <div className={'top-bar'}>
                <div className={'buttons'}>
                    <div className={'button red'}></div>
                    <div className={'button green'}></div>
                    <div className={'button blue'}></div>
                </div>
                <div className={'address-bar'}>
                    {path}
                </div>
                <div className={'menu'}>
                    <div className={'stripe'}></div>
                    <div className={'stripe'}></div>
                    <div className={'stripe'}></div>
                </div>
            </div>
            <div className={'post-body'}>
                <div className={'post-title'}>
                    <p>{title}</p>
                </div>
                <div className={'post-image'}>
                    <img className={'post-image'}
                         src={imageSrc}
                         alt={altText}/>
                </div>
                <div className={'post-textarea'}>
                    {text}
                </div>
            </div>
        </section>
    );
}