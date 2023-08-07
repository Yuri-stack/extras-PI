import { ChangeEvent, FormEvent, useState } from 'react'
import { Postagem } from '../../models/Postagem'
import Comentarios from '../Comentarios/Comentarios'

interface CardPosts {
    post: Postagem
}

function CardPosts({ post }: CardPosts) {
    // Inicia o campo de Comentarios com um Comentário Generico
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
        <div>
            <h1>{post.titulo}</h1>
            <h2>{post.texto}</h2>

            <form onSubmit={criarNovoComentario} className='flex flex-col'>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={novoComentarioTexto}
                    onChange={atualizarNovoComentario}
                    required
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div>
                {comentarios.map(comentario => {
                    return (
                        <Comentarios conteudo={comentario} />
                    )
                })}
            </div>
        </div>
    )
}

export default CardPosts