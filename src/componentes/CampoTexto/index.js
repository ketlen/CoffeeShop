import './CampoTexto.css'

const CampoTexto = (props) => { // função anônima

    const placeholderModificada = `${props.placeholder}...`

    // let valor = 'Cappuccino'

    // H O O K
    // preenchendo localmente
    //const [valor, SetValor] = useState('Cappuccino')

    // pega cada letra digitada
    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
     }
    
    return (
        <div className='campo-texto'>            
            <label>            
                {props.label}                
            </label>       
        <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )

}

export default CampoTexto