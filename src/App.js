import AppBar from "./AppBar";
import Header from "./Header"
import Wall from './Wall'

import './fonts/ubuntu_mono.ttf';

function App() {
    return (
        <div>
            <Header/>
            <Wall />
            <AppBar/>
        </div>
    );
}

export default App;
