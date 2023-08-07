import { useContext } from 'react'
import { Context } from '../../context/Context'

function Navbar() {
    const { quantidadeItems } = useContext(Context)

    return (
        <>
            <div>Navbar</div>
            <div>Quantidade no Carrinho: {quantidadeItems}</div>
        </>
    )
}

export default Navbar