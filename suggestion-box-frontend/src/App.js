import './App.css';
import {Route, Routes} from 'react-router-dom';
import TamLunch from "./pages/suggestion";

function App() {

    return (
        <Routes>
            <Route path='/' element={<TamLunch/>}/>
        </Routes>
    )
}

export default App;

