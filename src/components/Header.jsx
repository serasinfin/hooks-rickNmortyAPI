import {useState} from "react";

const Header = () => {
    const [darkMode, setdarkMode] = useState(false)
    const handleClick = () => {
        setdarkMode(!darkMode);
    }
    return (
        <div className={'header'}>
            <h1>React hooks</h1>
            <button type={'button'} onClick={handleClick}> {darkMode ? 'LightMode' : 'DarkMode'}</button>
            {/*dos soluciones validas*/}
            <button type={'button'} onClick={() => setdarkMode(!darkMode)}> {darkMode ? 'LightMode' : 'DarkMode'}</button>
        </div>
    );
};

export {Header};
