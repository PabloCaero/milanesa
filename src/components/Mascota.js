export default function Mascota(){

    /*ASI SE DESARROLLA*/
    let mascota = {
        nombre: 'Sasha',
        edad: '8',
        tipo: 'perro',
        colores: [
            'marron',
            'blanco'
        ]
    }
    
    /*ASI SE DEVUELVE*/
    return(
        <div>
        <h2>{mascota.nombre}</h2>
        <p>
            Edad: {mascota.edad} <br />
            Tipo: {mascota.tipo}
        </p>
    </div>
)
}