<div align="center">
  <img src="https://github.com/user-attachments/assets/6395425e-8dd4-4ac4-bef6-eeeb6ba95757" height="100"/>
</div>

# RS Solutions Challenge

Este repositório irá conter os arquivos fonte referente ao projeto RS Solutions Challenge.

## 📌 Sobre

Esse projeto é um desafio estilo Hackathon proposto pela empresa <a href="https://www.rssolutions.com.br/">RS Solutions</a> em que consiste no desenvolvimento de uma aplicação web full-stack, trabalhando na criação de um sistema de Dashboard para visualização dos dados provenientes da <a href="https://integration.plataformaseru.com.br/v1/docs">API Seru</a> (API mantida pela própria empresa).

## ⚙ Tecnologias

<div>
    <h3>Front-End</h3>
    <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> &nbsp
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" /> &nbsp
</div>

<div>
    <h3>Back-End</h3>
    <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /> &nbsp
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" /> &nbsp
</div>

## 🚀 Instalando o projeto

### Pré-requisitos

Antes de iniciar, verifique se você atende aos seguintes requisitos:

- [Node.js](https://nodejs.org/pt) > v22.13.1
- [Docker](https://www.docker.com/) (necessário apenas para rodar o projeto com o Docker)
- [PostgreSQL](https://www.postgresql.org/) > 17 (necessário apenas para rodar o projeto localmente)

### Instalação

Clone o projeto:

```
git clone https://github.com/LuizBarel/rs-solutions-challenge.git
```

**OBS: Se for usar Docker, configure o `.env` na raiz do projeto conforme sua máquina, alterando usuário, senha ou porta conforme necessário. Se for usar local, configure o `.env` na raiz do back-end nesse caso.**

Na raiz do projeto, abra o terminal e instale as dependências:

```
npm run install:all
```

### Inicializando o projeto

#### Com Docker

Crie e inicie os containers docker com o comando:

```
npm run docker:up
```

#### Localmente

Na pasta `back-end`, abra um terminal e execute o servidor:

```
npm run start
```

Em seguida, na pasta `front-end`, abra um terminal e execute o front-end:

```
npm run dev
```

## 🎨 UI/UX

O processo de UI/UX desse projeto foi desenvolvido com a ferramenta `Figma`, utilize o seguinte link para visualizar o projeto:

[Arquivo Figma](https://www.figma.com/design/5hBkIORTjnsMv7russVEBk/RS-Solutions-Challenge---Hackathon?node-id=0-1&t=GdaePGOE4YpmQntp-1)

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/giovaniwhb/" target="_blank" title="LinkedIn">
        <img src="https://avatars.githubusercontent.com/u/144968863" width="100px;" alt="Foto do Giovani Bianchi no GitHub"/><br>
        <sub>
          <b>Giovani Bianchi</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/luiz-barel-58570429b/" target="_blank" title="LinkedIn">
        <img src="https://avatars.githubusercontent.com/u/138068450" width="100px;" alt="Foto do Luiz Barel"/><br>
        <sub>
          <b>Luiz Barel</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/yan-ernesto-97751a1b8/" target="_blank" title="LinkedIn">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGaqZkPELbReA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666744379129?e=1743638400&v=beta&t=JXPagSPDzNgWYI141lZdlzj72H8kZwiFhlO0bDmc7KI" width="100px;" alt="Foto do Yan Ernesto"/><br>
        <sub>
          <b>Yan Ernesto</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
