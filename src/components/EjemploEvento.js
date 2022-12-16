export default function EjemploEvento(){

    /*  EVENTO JAVASCRIPT */
    function saludar(){
        alert('hola mi amor 🥰');
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