import './LoginAdmin.css';


export default function LoginAdmin(){


    return(
        <div class="login-page">
        <div class="form">
         
          <form class="login-form">
            <input type="text" placeholder="Usuario"/>
            <input type="password" placeholder="Contraseña"/>
            <button>Login</button>
           
          </form>
        </div>
      </div>
    )
}