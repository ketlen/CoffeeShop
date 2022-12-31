import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, setTipo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCafeCadastrado({
            nome,
            imagem,
            tipo
        })
        setNome('')
        setImagem('')
        setTipo('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar a apresentação do café </h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tipo" 
                    itens={props.times}
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario