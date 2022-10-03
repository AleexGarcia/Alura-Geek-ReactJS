
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import AdicionarProduto from './AdicionarProduto';
import Dashboard from './Dashboard';
import ProdutoPage from './ProdutoPage';
import Cadastro from './Cadastro';
import { AuthProvider, AuthContext } from '../Context/AuthContext';
import { HeaderProvider } from '../Context/HeaderContext';
import { useContext } from 'react';

const PrivateRoute = ({ children, redirectTo }) => {
    const { authenticated } = useContext(AuthContext);

    return authenticated ? children : <Navigate to={redirectTo} />;

};

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
                        <Route path='dashboard' element={
                            <PrivateRoute redirectTo={'/login'}>
                                <Dashboard />
                            </PrivateRoute>
                        } />
                        <Route path='dashboard/adicionar' element={
                            <PrivateRoute redirectTo={'/login'}>
                                <AdicionarProduto />
                            </PrivateRoute>
                        } />
                        <Route path='dashboard/editar/:id' element={
                            <PrivateRoute redirectTo={'/login'}>
                                <AdicionarProduto />
                            </PrivateRoute>
                        } />
                    </Routes>
                    <Footer />
                </Router>
            </HeaderProvider>
        </AuthProvider>
    );
}

export default App;
