import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { About } from './components/About/About';

function App() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setDark(true)
            document.body.classList.add("dark");
        }
    },[])

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    
    return (
        <div className='text-black bg-light-primary dark:text-white dark:bg-dark-primary' id="app">
            <NavBar dark={dark} onClickToggle={darkModeHandler} />   
            <About />
        </div>
)
}

export default App
