import styles from "../styles/pages/home.module.scss";
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';

export default function Register() {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroMessage, setErroMenssage] = useState('');

  const { push } = useRouter();
  
  function handleIsPassword(event){
    event.preventDefault();
    setIsHidePassword(!isHidePassword)
  }
  function handleName(event){
    setName(event)
  }
  function handleEmail(event){
    setEmail(event)
  }
  function handlePassword(event){
    setPassword(event)
  }
  function goLogin(event){
    event.preventDefault();
    push('/')

  }
  function register(event){
    event.preventDefault();
    setErroMenssage('')
    if(name == '' || email == '' || password == ''){
      setErroMenssage('Voce deve preencher todos os campos')
    }

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastro</title>
      </Head>
      <div className={styles.containerForm}> 
        <form>
          <h1>Cadastro</h1>
          <input 
            placeholder="Digite seu name"
            type="text"
            value={name}
            onChange={event => handleName(event.target.value)}/>
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
            onClick={register}>Cadastrar</button>
          <button 
            className={styles.buttons}
            onClick={goLogin}> 
              Voltar para o login
          </button>
          
        </form>
      </div>
    </div>
  );
}
