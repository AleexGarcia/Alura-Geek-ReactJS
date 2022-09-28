
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='login' element={<Login />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
