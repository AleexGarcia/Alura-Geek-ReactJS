
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AdicionarProduto from './AdicionarProduto';
import Dashboard from './Dashboard';
import ProdutoPage from './ProdutoPage';
import Cadastro from './Cadastro';
import { AuthProvider } from '../Context/AuthContext';
import { HeaderProvider } from '../Context/HeaderContext';

function App() {

    return (
        <AuthProvider>
            <HeaderProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='produto/:id' element={<ProdutoPage />} />
                        <Route path='login' element={<Login />} />
                        <Route path='cadastro' element={<Cadastro />} />
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='dashboard/adicionar' element={<AdicionarProduto />} />
                    </Routes>
                    <Footer />
                </Router>
            </HeaderProvider>
        </AuthProvider>
    );
}

export default App;
