import { ChangeEvent, FormEvent, useState } from 'react'
import { Postagem } from '../../models/Postagem'
import Comentarios from '../Comentarios/Comentarios'

interface CardPosts {
    post: Postagem
}

function CardPosts({ post }: CardPosts) {
    // Inicia o campo de Comentarios com um Comentário Genérico
    const [comentarios, setComentarios] = useState([
        'Post muito bacana, hein?! 👏👏'
    ])

    // State que usaremos para pegar o texto dos novos Comentários
    const [novoComentarioTexto, setNovoComentarioTexto] = useState('')

    // Função que vai pegar os novos comentários digitados e adiciona ao State
    function criarNovoComentario(event: FormEvent) {
        event.preventDefault()
        setComentarios([...comentarios, novoComentarioTexto])
        setNovoComentarioTexto('')
    }

    // Função que pega o texto do novo comentário
    function atualizarNovoComentario(event: ChangeEvent<HTMLTextAreaElement>) {
        setNovoComentarioTexto(event.target.value)
    }

    return (
        <>
            <div className='m-4 border-2 border-gray-400  lg:border-gray-400 w-[620px] rounded-lg'>
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-2">
                            <div className="text-gray-900 font-bold text-xl mb-2">{post.titulo}</div>
                            <p className="text-gray-700 text-base">{post.texto}</p>
                        </div>
                    </div>
                </div>

                <hr />

                {/* Parte para inserir o Comentário */}
                <form onSubmit={criarNovoComentario} className='flex flex-col p-4'>
                    <strong>Deixe seu feedback</strong>
                    
                    <textarea
                    className='mt-4'
                        name='comment'
                        placeholder='Deixe seu comentário'
                        value={novoComentarioTexto}
                        onChange={atualizarNovoComentario}
                        required
                    />
                    <footer>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded-full"
                            type="submit">Publicar</button>
                    </footer>
                </form>
            </div>

            <div className='m-4'>

                <h2 className='mb-4 font-bold'>Comentários</h2>

                {comentarios.map(comentario => {
                    return (
                        <Comentarios conteudo={comentario} />
                    )
                })}
            </div>
        </>
    )
}

export default CardPosts