import Coffee from '../Coffee/coffee'
import './Time.css'

const Time = (props) => {
    return (
        props.cafes.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='coffees'>
            {props.cafes.map( cafe => <Coffee corDeFundo={props.corPrimaria} key={cafe.nome} nome={cafe.nome} imagem={cafe.imagem}/>)}
            </div>
            
        </section>
    )
}

export default Time