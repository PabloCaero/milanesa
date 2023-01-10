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
                   <BsTwitter/>  <label />          
                   
                    <BsFacebook/>    <label />
              
                    <BsGithub />    <label />
                   
                    <BsInstagram />
					
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