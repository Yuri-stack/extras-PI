interface ComentariosProps {
    conteudo: string
}

function Comentarios({ conteudo }: ComentariosProps) {
    return (
        <p className="mt-4">{conteudo}</p>
    )
}

export default Comentarios