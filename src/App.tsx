import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './context/Context'

import Home from './pages/Home/Home'
import Carrinho from './pages/Cart/Carrinho'
import Produtos from './pages/Produtos/Produtos'
import Postagens from './pages/Postagens/Postagens'

import './App.css'

function App() {
    return (
        <Provider>

            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/carrinho' element={<Carrinho />} />
                <Route path='/postagens' element={<Postagens />} />
            </Routes>
            </BrowserRouter>

        </Provider>
    )
}

export default App
