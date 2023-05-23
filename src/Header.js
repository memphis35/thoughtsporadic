import './Header.css';
import logo from './img/logo.gif'

export default function Header() {
    const date = new Date();
    return (
        <div className='header'>
            <div>
                <img className={'logo'} src={logo} alt='logo'/>
            </div>
            <div className='clock'>
                {date.toDateString()}
            </div>
            <div className='apps-button'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
        </div>
    );
}