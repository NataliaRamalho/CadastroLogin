# Cadastro Login 
Aplicação que realiza o cadastro e login, desenvolvida com intuito de treinar meus conhecimentos em Node.js, React e React-Native.

Sumário
=================
   1. [Principais tecnologias utilizadas](#Principais-tecnologias-utilizadas)
   2. [Funcionalidades principais](#Funcionalidades-principais)
   3. [Pré requisitos para executar o projeto](#Pré-requisitos-para-executar-o-projeto)
   4. [Como executar o projeto](#como-executar-o-projeto)


# Principais tecnologias utilizadas  
 * Node.js 
 * PostgreSQL 
 * Sequelize 
 * React 
 * Next.js 
 * TypeScript 
 * Sass 
 * Axios 
 * React-Native.js 
 * Expo 

 # Funcionalidades principais 
  * Cadastro 
  * Login 

# Pré requisitos para executar o projeto 
- [Node.js](https://nodejs.org/en/)  
- Editor de código. Recomenda-se o [VSCode](https://code.visualstudio.com/)
- Pacote npm ou yarn. O pacote npm vem junto com o [Node.js](https://nodejs.org/en/)
- Banco de dados [PostgreSQL](https://www.postgresql.org/download/) 
- [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/downloads/)
- [aplicativo expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US) instalado no celular ou emulador 

# Como executar o projeto 
- Baixe este repositório 
Caso tenha o [git](https://git-scm.com/downloads) instalado, digite o comando abaixo no seu terminal. 
Se não, faça o download do repositório e descompacte o arquivo.

`````
git clone https://github.com/NataliaRamalho/CadastroLogin.git

`````

## Executando o backend
- Abra o projeto em um editor de código  
- Digite no terminal o comando a seguir, para entrar na pasta do backend 

```
   cd backend 
```
- Instale as dependências do projeto, com o comando: 

```
 yarn install
 ou  
 npm install
```
- Renome o arquivo _env para .env 
- Atualize o arquivo .env com o usuário e senha do seu banco de dados PostgreSQL. 

- Crie o banco de dados, com o comando 
```
   yarn sequelize-cli db:create
   ou 
   npx sequelize-cli db:create
```
- Rode as migrations para criar as tabelas, digitando no terminal: 
```
   yarn sequelize-cli db:migrate
   ou 
   npx sequelize-cli db:migrate
```


- Execute o projeto com o comando a seguir: 

```
   yarn dev 
   ou
   npm dev
```
Parabéns o backend está executando 😃.  

### Testando as rotas 
- Abra o [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/downloads/)

#### Rota de cadastro de usuário 
- Execute o método POST, na url: http://localhost:3333/register , passando o seguinte corpo:

```
{
	"email": "teste@gmail.com",
	"name": "teste",
	"password": "123"
}
```
#### Rota de login
- Execute o método POST, na url: http://localhost:3333/login , passando o seguinte corpo:

```
{
	"email": "teste@gmail.com",
	"password": "123"
}
```

## Executando o frontend (web)
- Com o backend rodando, abra outro terminal e digite o comando a seguir, para entrar na pasta do frontend

```
   cd frontend
```

- Instale as dependências do projeto, com o comando: 

```
 yarn install
 ou  
 npm install
```

- Execute o projeto com o comando a seguir: 

```
   yarn dev 
   ou
   npm dev
```
Parabéns o frontend está executando na url: http://localhost:3000/.  

## Executando o a versão mobile
- Com o backend rodando, abra outro terminal e digite o comando a seguir, para entrar na pasta mobile

```
   cd mobile
```
- Instale as dependências do projeto, com o comando: 

```
 yarn install
 ou  
 npm install
```
- Abra o arquivo _env.js em mobile\src\utils\_env.js

- Mude o nome do arquivo _env.js para env.js 

- Coloque o ip da máquina na linha 5 do arquivo env.js


- Execute o projeto com o comando a seguir: 

```
   yarn dev 
   ou
   npm dev
```
Parabéns a versão mobile está executando 😃. Agora é só ler o QrCode com o aplicativo do expo ou abrir pelo emulador. 


⏰ Projeto desenvolvido em abril/2021
