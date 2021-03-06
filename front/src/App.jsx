import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppNav } from './components/Nav';
import { Center } from './components/Formatting';
import { Landing, Flights, EditFlight, Error, CreateFlight, SearchFlights } from './pages';
import logo from './NicePng_plane-emoji-png_1468456.png';


const App = () =>{
    

    return(
        <BrowserRouter>
            <Center>
            <div className="App">
            <header header className="App-header"  >
                <img src={ logo } className="App-logo" alt="logo" height="250"/> 
                <h1><div>Flight Services</div></h1>
            </header>       
            </div></Center>
            <AppNav />
            <Routes>
            <Route path="/" element={<Landing />} />
                    <Route path="/flights" element={<Flights />} />
                    <Route path="/createflight" element={<CreateFlight />} />
                    <Route path="/searchflight" element={<SearchFlights />} />
                    <Route path="/editflight" element={<EditFlight />} />
                    <Route path="*" element={<Error />} />
            </Routes>
            
            
            
        </BrowserRouter>
    );
}

export default App;