import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppNav } from './components/Nav';
import { Center } from './components/Formatting';
import { Landing, Flights, Passengers, Error, CreateFlight, CreatePassenger } from './pages';
import logo from './Fly.jpg';


const App = () =>{
    

    return(
        <BrowserRouter>
            
            <div className="App">
            <header header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" height="300"/> 
                <h1><div>Flight Services</div></h1></header>       
            
            </div>
            <div><AppNav /></div>
            <Routes>
            <Route path="/" element={<Landing />} />
                    <Route path="/flights" element={<Flights />} />
                    <Route path="/createflight" element={<CreateFlight />} />
                    <Route path="/createpassenger" element={<CreatePassenger />} />
                    <Route path="/passengers" element={<Passengers />} />
                    <Route path="*" element={<Error />} />
            </Routes>
                
        </BrowserRouter>
    );
}

export default App;