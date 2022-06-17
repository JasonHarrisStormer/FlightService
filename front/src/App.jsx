import { Form } from "./Form";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features';
import { Landing, Flights, Error, ReduxExamples } from './Pages';
import ThemeContext, { themes } from './contexts/ThemeContext';
import './App.css';


const App = () =>{
    const [currTheme, setCurrTheme] = useState(themes.light);

    const toggleTheme = () => {
        if (currTheme === themes.light) {
            setCurrTheme(themes.dark);
        } else {
            setCurrTheme(themes.light);
        }
    }

    return(
        <>
            <div className="App">
            <header header className="App-header">
                <img src="https://media.istockphoto.com/vectors/plane-icon-vector-id694972110?k=20&m=694972110&s=612x612&w=0&h=B9s-39VnZb--aEaD4XJjU0AovxVIWzpGdAMj6ynY98U=" 
                        className="App-logo" alt="logo" height="300"/>
                        <h1><div>Flight Services</div></h1></header>       
            <Form></Form>
            </div>      
        </>
    );
}

export default App;