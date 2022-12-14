export default function EjemploEvento(){

    /*  EVENTO JAVASCRIPT */
    function saludar(){
        alert('Saludo desde el Function');
    }

    /* EVENTO SHORTCUT */
    /* return(
        <button onClick={()=>alert('Saludo desde el Shortcut))}>
            Cliqueame
        </button>
    ) */

    return(
        <button onClick={saludar}>
            Cliqueame
        </button>
    )
}