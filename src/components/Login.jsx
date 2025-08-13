import { useState } from 'react';
import {FaUser, FaLock} from 'react-icons/fa';
import './Login.css';

const Login = () => {

    const[username, setUsername]= useState('');
    const[password, setPassword]= useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(username, password);

        console.log("Envio");
    };


  return (
    <div className="container">
        <form onSubmit={handleSubmit}> 
            <h1>Sistema de Login</h1>
            <div className="input-container">
<input type="email" placeholder="E-mail:" onChange={(e) => setUsername(e.target.value)}/>
<FaUser className='icon'/>
            </div>
            <div className="input-container">
<input type="password" placeholder="Senha:" onChange={(e) => setPassword(e.target.value)} />
<FaLock className='icon'/>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    lembrar-me?
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>
            <button class="btn">Entrar</button>
            <div className="signup-link">
                <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a>
                </p>
            </div>
            
            

        </form>
    </div>
  );
};

export default Login