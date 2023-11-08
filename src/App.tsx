import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from './context/Context'

import Home from './pages/Home/Home'
import Carrinho from './pages/Cart/Carrinho'
import Navbar from './components/Navbar/Navbar'
import Produtos from './pages/Produtos/Produtos'
import Postagens from './pages/Postagens/Postagens'

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Navbar />
                    <div className='min-h-[80vh]'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/produtos' element={<Produtos />} />
                            <Route path='/carrinho' element={<Carrinho />} />
                            <Route path='/postagens' element={<Postagens />} />
                        </Routes>
                    </div>
            </BrowserRouter>

        </Provider>
    )
}

export default App
