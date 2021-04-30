import styles from "../styles/pages/home.module.scss";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';
import axios from 'axios'

export default function Home() {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroMessage, setErroMenssage] = useState('');
  const { push } = useRouter();
  
  function handleIsPassword(event){
    event.preventDefault();
    setIsHidePassword(!isHidePassword)
  }
  function handleEmail(event){
    setEmail(event)
  }
  function handlePassword(event){
    setPassword(event)
  }

  function goRegister(event){
    event.preventDefault();
    push('/register')
  }

  async function login(event){
    event.preventDefault();
    setErroMenssage('')
    if(email == '' || password == ''){
      return setErroMenssage('Voce deve preencher todos os campos')
    }
    await axios.post('http://localhost:3333/login',{email, password})
              .then((user)=>{alert(`${user.data.name} realizou o login no sistema`)})
              .catch(error =>{setErroMenssage(error.response.data)})

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.containerForm}> 
        <form>
          <h1>Login</h1>
          <input 
            placeholder="Digite seu email"
            type="email"
            value={email}
            onChange={event => handleEmail(event.target.value)}/>
          <input 
            placeholder="Digite sua senha"
            type={isHidePassword ? "password" : "text"}
            value={password}
            onChange={event => handlePassword(event.target.value)} />
          <button type="button" className={styles.buttonPassword} onClick={handleIsPassword} >         
             {isHidePassword ?   <AiOutlineEyeInvisible size={20}/> :   <AiOutlineEye size={20}/>}
             {isHidePassword ?  
              <h2> Ver senha </h2>:   
              <h2> Ocultar senha </h2>}
          </button>
          <h3> {erroMessage} </h3>
          <button 
            className={styles.buttons}
            onClick={login}>Logar</button>
          <button 
            className={styles.buttons}
            onClick={goRegister}> 
              Ir para o Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
