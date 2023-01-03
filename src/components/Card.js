import './Card.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


//CARD RECIBE UN OBJETO CON LOS DATOS. EL OBJETO SE LLAMA "card"
export default function Card({card}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      

    return(

        <div className="card">
            <img className="card-img" src={card.imagen} alt=""/>
            <div className="card-info">
             <h3 className="card-info_titulo">{card.titulo}</h3>
             <p className="card-info_descripcion">{card.descripcion}</p>
             {/*CONDICIONALES (CONDITIONAL RENDERING)*/}
             {/*Para mas de una condicion condicion_tf && descripcion < 200 && ESTO SERÍA COMO UN ENTONCES*/}  
                 {card.condicion_tf  &&
                    <p className="gratis"> [TRUE] </p> 
                 }
                 {!card.condicion_tf &&
                    <p className="gratis">[FALSE]</p> 
                 }

                <Button variant="danger" onClick={handleShow}>
                    Abrir Modal
                 </Button>
                <p className="card-info_titulo"></p>

                

            </div>   

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{card.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <img className="card-img2" src={card.imagen} alt=""/>
    


        <p >{card.descripcion}</p>        



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
         
        </Modal.Footer>
      </Modal>     
         

        </div>
        )
}