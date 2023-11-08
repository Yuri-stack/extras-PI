import { useContext } from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'

function Navbar() {
    const { quantidadeItems } = useContext(Context)

    return (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <Link to='/' className='text-2xl font-bold'>Projeto</Link>
 
                <div className='flex gap-4'>
                    <Link to='/produtos' className='font-bold'>Produtos</Link>
                    <Link to='/postagens' className='font-bold'>Postagens</Link>
                    <Link to='/carrinho' className='font-bold'>Carrinho [{ quantidadeItems }]</Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar