import './Banner.css'

// Outra maneira de fazer export que se utiliza nas empresas

export const Banner = () => {
    return (
        //** alt(texto alternativo) é boa prática
        // JSX só aceita um modulo, para que nao fique um dentro do outro, pode-se usar <fragment> ou <>
         <>  
            <header className='banner'>
                <img src="/imagens/banner.png" alt="Banner principal página Organo"></img> 
            </header>
        </>
    )
}

// Maneira mais comum

/* function Banner(){ // JS
    // JSX [JS de alguma forma]
    return (
             //** alt(texto alternativo) é boa prática
        <header className='banner'>
            <img src="/imagens/banner.png" alt="banner principal página Organo"></img> 
      </header>
    )
}

export default Banner // JS */