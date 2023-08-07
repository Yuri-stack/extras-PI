import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './context/Context'

import Home from './pages/Home/Home'
import Carrinho from './pages/Cart/Carrinho'
import Navbar from './components/Navbar/Navbar'
import Produtos from './pages/Produtos/Produtos'

import './App.css'

function App() {
    return (
        <Provider>
            <Navbar />

            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
            </BrowserRouter>

        </Provider>
    )
}

export default App
