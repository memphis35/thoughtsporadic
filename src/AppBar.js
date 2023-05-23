import soundcloud from './img/soundcloud.svg';
import youtube from './img/youtube.svg';
import messenger from './img/messenger.svg';
import linkedin from './img/linkedin.svg';
import './AppBar.css';

export default function AppBar() {
    return (
        <div className='app-bar-wrapper'>
            <div className={'app-bar'}>
                <div className={'app'}>
                    <a href="https://www.youtube.com">
                        <img src={youtube} className={'app-icon'} alt={''}/>
                    </a>
                </div>
                <div className={'app'}>
                    <a href="https://www.linkedin.com">
                        <img src={linkedin} className={'app-icon'} alt={''}/>
                    </a>
                </div>
                <div className={'app'}>
                    <a href="https://www.soundcloud.com">
                        <img src={soundcloud} className={'app-icon'} alt={''}/>
                    </a>
                </div>
                <div className={'app'}>
                    <a href="https://www.facebook.com">
                        <img src={messenger} className={'app-icon'} alt={''}/>
                    </a>
                </div>
            </div>
        </div>
    );
}