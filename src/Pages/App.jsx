
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AdicionarProduto from './AdicionarProduto';
import Dashboard from './Dashboard';
import ProdutoPage from './ProdutoPage';
import { useState } from 'react';

function App() {
    
    const [page, setPage] = useState();
    
    return (
        <Router>
            <Header page={page} />
            <Routes>
                <Route index element={<Home setPage={setPage} />}/>
                <Route path='produto/0' element={<ProdutoPage />}/>
                <Route path='login' element={<Login setPage={setPage} />}/>
                <Route path='dashboard' element={<Dashboard setPage={setPage} />}/>
                <Route path='dashboard/adicionar' element={<AdicionarProduto setPage={setPage}/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
