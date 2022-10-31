import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './components/pages/HomePages/Home';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/products"
                        element={<Products />}
                    />
                    <Route
                        path="/services"
                        element={<Services />}
                    />
                    <Route
                        path="/signUp"
                        element={<SignUp />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
