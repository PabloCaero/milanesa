import './Nosotros.css';
import { BsTwitter} from 'react-icons/bs';
import { BsFacebook} from 'react-icons/bs';
import { BsGithub} from 'react-icons/bs';
import { BsInstagram} from 'react-icons/bs';


export default function Nosotros(){
    return(
        <>
       	<div className="section">
		<div className="container2">
			<div className="content-section">
				<div className="title">
					<h1>Sobre nosotros 😎</h1>
				</div>
				<div className="content" >

					<h3>Qué fiaca pensar en qué cocinar ¿no? 😓</h3>

					<p style={{                       
                           
					background: "transparent",    
                  }}>
					Recetas Simples es una web creada para ofrecerte una amplia variedad de recetas. 
					El proyecto inició su trabajo con el objetivo de ayudar a todas aquellas personas que quieran disfrutar de ricos y sencillos platos, y a su vez descubrir sabores nuevos 
					que requieren de poco tiempo. Trabajamos día a día en ampliar nuestro recetario con el fin de ayudarte 
					a cocinar de una manera simple. Compartimos recetas de cocina tradicional y vegetariana, y te invitamos a que nos compartas en nuestra sección de contacto nuevas ideas para 
					implementar o sugerencias para mejorar el sitio. 	
					</p>	 
					<br />
					<br />
		
					<p style={{                       
                    textAlign: "left",         
					background: "transparent",    
                  }}>
					Agradecemos la colaboración de:<br />
					<a href="https://www.paulinacocina.net/">Paulina Cocina</a><br />
					<a href="https://recetasargentinas.net/">Recetas Argentinas</a><br />
					<a href="https://www.recetasgratis.net/">Recetas Gratis</a><br />
					<a href="http://www.deliciasdoradas.com//">Delicias Doradas</a><br />
					</p>

				
				</div>

				<div className="social">
                   <a href="https://twitter.com/pablocaero" ><BsTwitter  style={{                       
                    width: "30px", height: "auto", color: "black",            
                  }} /></a> <label />          
                   
                    <a href="https://www.facebook.com/pabloezequiel.caero/"><BsFacebook style={{                       
                    width: "30px", height: "auto",   color: "black",          
                  }}/></a>  <label />
              
                    <a href="https://github.com/PabloCaero"><BsGithub style={{                       
                    width: "30px", height: "auto",   color: "black",          
                  }} /> </a>   <label />
                   
                    <a href="https://www.instagram.com/pabloecaero/"><BsInstagram style={{                       
                    width: "30px", height: "auto",  color: "black",           
                  }}/></a>
					
				</div>
			</div>
			<div className="image-section">
				<img src="images/nosotros.jpg" alt=""/>
			</div>
		</div>
	</div>

       

        </>
    )
}