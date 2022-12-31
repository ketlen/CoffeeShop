import './Coffee.css'

const Coffee = ({nome, imagem, corDeFundo}) => {
    return (
        <div className='coffee'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
            </div>
       </div>
)}

export default Coffee

//aqui houve destruturação (substituição do props)

// Trás a foto de perfil no GitHub
// <img src='https://github.com/ketlen.png' alt=''></img>