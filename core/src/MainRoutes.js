import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import Login from './components/LoginAndRegister/Login.jsx';
import ListarProdutos from './components/ListarProdutos/ListarProdutos.jsx';
function MainRoutes() {
    return (
        <Routes>
            {/* Base Path */}
            <Route path="/" element={<HomePage />}></Route>

            {/* Login */}
            <Route path='/Login' element={<Login />} ></Route>

            {/* Path de listagem de Produtos */}
            <Route path='/ListarProdutos' element={<ListarProdutos />}></Route>

        </Routes>
    )
}
export default MainRoutes;