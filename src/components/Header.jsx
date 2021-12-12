import {useState, useContext} from "react";

import {ThemeContext} from "../context/ThemeContext";

const Header = () => {
    const [darkMode, setdarkMode] = useState(false)
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setdarkMode(!darkMode);
    }
    return (
        <div className={'header'}>
            <h1 style={{color}}>React hooks</h1>
            <button type={'button'} onClick={handleClick}> {darkMode ? 'LightMode' : 'DarkMode'}</button>
            {/*dos soluciones validas*/}
            {/*<button type={'button'} onClick={() => setdarkMode(!darkMode)}> {darkMode ? 'LightMode' : 'DarkMode'}</button>*/}
        </div>
    );
};

export {Header};
