import './Card.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {CardImg, Card, CardTitle, CardBody} from 'reactstrap';


//CARD RECIBE UN OBJETO CON LOS DATOS. EL OBJETO SE LLAMA "card"
export default function CardDesign({card}){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      

    
    

    return(

  <>
     
     
     <Card color="light" onClick={handleShow}>

            <CardImg
          alt="Card image cap"
          src={card.imagen}
          top
          width="100%"
          />

        <CardBody>
          <CardTitle tag="h5">
          {card.titulo}
          </CardTitle>


                {card.condicion_tf &&
                <Button variant="success" onClick={handleShow}>
                    👀
                 </Button>
                 }

                {!card.condicion_tf &&
                <Button variant="secondary" onClick={handleShow}>
                    👀
                 </Button>
                 }

    </CardBody>

    </Card >




            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
       
          <Modal.Title>{card.titulo}</Modal.Title>
         

        </Modal.Header>
        <Modal.Body>
         <center >      
          <div style={{objectFit: "contain",}}>
        <img className="card-img2" src={card.imagen} alt=""/>
        </div>
        </center>  


        <p >{card.descripcion}</p>
        <center>            
        <a href={card.link_receta}>Ver</a>
        </center>        


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
         
        </Modal.Footer>
      </Modal>     
         

        
  </>
)

}