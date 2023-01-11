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
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
				
				</div>
				<div className="social">
                   <a href="https://twitter.com/pablocaero" ><BsTwitter  style={{                       
                    width: "30px", height: "auto",             
                  }} /></a> <label />          
                   
                    <a href="https://www.facebook.com/pabloezequiel.caero/"><BsFacebook style={{                       
                    width: "30px", height: "auto",             
                  }}/></a>  <label />
              
                    <a href="https://github.com/PabloCaero"><BsGithub style={{                       
                    width: "30px", height: "auto",             
                  }} /> </a>   <label />
                   
                    <a href="https://www.instagram.com/pabloecaero/"><BsInstagram style={{                       
                    width: "30px", height: "auto",             
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