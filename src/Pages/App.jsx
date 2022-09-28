
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AdicionarProduto from './AdicionarProduto';
import Dashboard from './Dashboard';
import ProdutoPage from './ProdutoPage';

function App() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='produto/0' element={<ProdutoPage />}/>
                <Route path='login' element={<Login />}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='dashboard/adicionar' element={<AdicionarProduto/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
