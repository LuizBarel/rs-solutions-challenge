<div align="center">
  <img src="https://github.com/user-attachments/assets/6395425e-8dd4-4ac4-bef6-eeeb6ba95757" height="100"/>
</div>

# RS Solutions Challenge

Este repositório contém os arquivos fonte referente ao projeto RS Solutions Challenge.

## 📃 Tópicos

- [Sobre](#about)
- [Tecnologias](#technologies)
- [Instalando o projeto](#installing)
- [Inicializando o projeto](#initializing)
- [Endpoints da API](#endpoints)
- [Comandos](#commands)
- [UI/UX](#uiux)
- [Colaboradores](#collaborators)

<h2 id="about">📌 Sobre</h2>

Esse projeto é um desafio estilo Hackathon proposto pela empresa <a href="https://www.rssolutions.com.br/">RS Solutions</a> em que consiste no desenvolvimento de uma aplicação web full-stack, trabalhando na criação de um sistema de Dashboard para visualização dos dados provenientes da <a href="https://integration.plataformaseru.com.br/v1/docs">API Seru</a> (API mantida pela própria empresa).

<h2 id="technologies">⚙ Tecnologias</h2>

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

<h2 id="installing">🚀 Instalando o projeto</h2>

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

**OBS: Você pode utilizar os valores do `.env.example` que já vem do projeto. Se preferir configurar do seu jeito, caso for usar Docker, configure o `.env` na raiz do projeto conforme sua máquina, alterando usuário, senha ou porta conforme necessário. Se for usar local, configure o `.env` na raiz do back-end nesse caso.**

Na raiz do projeto, abra o terminal e instale as dependências:

```
npm run install:all
```

<h2 id="initializing">☕ Inicializando o projeto</h2>

#### Com Docker

Crie e inicie os containers docker com o comando:

```
npm run docker:up
```

**OBS: Um erro comum é o backend inicializar antes do postgres, para resolver basta reiniciar o container do backend.**

**IMPORTANTE: No localhost da api do back-end, acesse a rota `/seru-api/populate` ou pelo [Swagger](https://swagger.io/) em `/docs` para popular o banco de dados com 50 pedidos, assim será possível testar o funcionamento do projeto com dados de teste.**

#### Localmente

Na pasta `back-end`, abra um terminal e execute o servidor:

```
npm run start
```

Em seguida, na pasta `front-end`, abra um terminal e execute o front-end:

```
npm run dev
```

**IMPORTANTE: No localhost da api do back-end, acesse a rota `/seru-api/populate` ou pelo [Swagger](https://swagger.io/) em `/docs` para popular o banco de dados com 50 pedidos, assim será possível testar o funcionamento do projeto com dados de teste.**

<h2 id="endpoints">📍 Endpoints da API</h2>

Aqui está uma lista de todos os endpoints da API. Utilize a rota `/docs` para acessar a documentação com o [Swagger](https://swagger.io/) ou escreva as rotas na URL manualmente.

A collection do [Insomnia](https://insomnia.rest/) está disponível da raiz do projeto, importe ela na ferramenta que preferir (Insomnia, Postman...) e teste os endpoints.

### User

| rota                      | descrição                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------- |
| <kbd>GET /user</kbd>      | Retorna todos os usuários cadastrados (rota teste) [detalhes da resposta](#get-user-detail)           |
| <kbd>GET /user/{id}</kbd> | Retorna um usuário com base no id passado (rota teste) [detalhes da resposta](#get-user-by-id-detail) |

<h3 id="get-user-detail">GET /user</h3>

**RESPOSTA**

```json
[
    {
        "id": 1,
        "name": "Teste",
        "email": "teste@gmail.com",
        "password": "$2b$10$cNB.J2lVGR.JFMysQ9Np8eJSX3.nf9h0gnK8Me3yNAZ5PYfPeiEJa",
        "createdAt": "2025-02-23T23:14:21.857Z",
        "updatedAt": "2025-02-23T23:14:24.424Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0LCJ1c2VybmFtZSI6InRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTc0MDM1MjQ2NCwiZXhwIjoxNzQwOTU3MjY0fQ.PgFr9KwaT9Vf7N_0DgmGgLduE3IbVjK7AprQSgmqKUw"
    },
    {
        "id": 2,
        "name": "Teste2",
        "email": "teste2@gmail.com",
        "password": "$2b$10$cNB.J2lVGR.JFMysQ9Np8eJSX3.nf9h0gnK8Me3yNAZ5PYfPeiEJa",
        "createdAt": "2025-02-23T23:14:21.857Z",
        "updatedAt": "2025-02-23T23:14:24.424Z",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0LCJ1c2VybmFtZSI6InRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTc0MDM1MjQ2NCwiZXhwIjoxNzQwOTU3MjY0fQ.PgFr9KwaT9Vf7N_0DgmGgLduE3IbVjK7AprQSgmqKUw"
    }
]
```

<h3 id="get-user-by-id-detail">GET /user/{id}</h3>

**RESPOSTA**

```json
{
    "id": 1,
    "name": "Teste",
    "email": "teste@gmail.com",
    "password": "$2b$10$Ya11IBSCwYAscUa2YBQEHeGreIUCEWWA11vB56kpYG5yh8vpRCrxe",
    "createdAt": "2025-02-23T23:14:21.857Z",
    "updatedAt": "2025-02-23T23:14:24.424Z",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoidGVzdGVAZ21haWwuY29tIiwiaWF0IjoxNzQwMDk3Nzc0LCJleHAiOjE3NDA3MDI1NzR9.OkEPt6iGHA0MRZ1ySqGG-thKukzJ8Tfvo732S_sy02E"
}
```

### Auth

| rota                         | descrição                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------- |
| <kbd>POST /auth/signup</kbd> | Cadastra um novo usuário no sistema [detalhes da requisição](#post-signup-detail)                 |
| <kbd>POST /auth/signin</kbd> | Realiza o login do usuário com base nas credenciais [detalhes da requisição](#post-signin-detail) |

<h3 id="post-signup-detail">POST /auth/signup</h3>

**REQUISIÇÃO**

```json
{
    "name": "Teste",
    "email": "teste@gmail.com",
    "password": "teste123"
}
```

**RESPOSTA**

```json
{
    "message": "Usuário criado com sucesso"
}
```

<h3 id="post-signin-detail">POST /auth/signin</h3>

**REQUISIÇÃO**

```json
{
    "email": "teste@gmail.com",
    "password": "teste123"
}
```

**RESPOSTA**

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI0LCJ1c2VybmFtZSI6InRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTc0MDM1MjQ2NCwiZXhwIjoxNzQwOTU3MjY0fQ.PgFr9KwaT9Vf7N_0DgmGgLduE3IbVjK7AprQSgmqKUw",
    "username": "Teste"
}
```

### Orders

| rota                                   | descrição                                                                                                                          |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>GET /orders</kbd>                 | Retorna todos os pedidos armazenados no banco de dados [detalhes da resposta](#get-orders)                                         |
| <kbd>GET /orders/invoicing</kbd>       | Retorna o total de faturamento [detalhes da resposta](#get-invoicing)                                                              |
| <kbd>GET /orders/ticket</kbd>          | Retorna o ticket médio [detalhes da resposta](#get-ticket)                                                                         |
| <kbd>GET /orders/month-invoicing</kbd> | Retorna um array com o faturamento de todos os meses do ano atual e do ano passado [detalhes da resposta](#get-invoicing-by-month) |
| <kbd>GET /orders/channels</kbd>        | Retorna um array com os dados relacionados a cada canal/modalidade [detalhes da resposta](#get-channels)                           |

<h3 id="get-orders">GET /orders</h3>

**RESPOSTA**

```json
{
    "totalQtdOrders": 16,
    "currentQtdOrders": 16
}
```

<h3 id="get-invoicing">GET /orders/invoicing</h3>

**RESPOSTA**

```json
{
    "totalSum": 425.12,
    "currentSum": 425.12
}
```

<h3 id="get-ticket">GET /orders/ticket</h3>

**RESPOSTA**

```json
{
    "currentTicket": 26.57,
    "monthlyTicket": 26.57
}
```

<h3 id="get-invoicing-by-month">GET /orders/month-invoicing</h3>

**RESPOSTA**

```json
{
    "thisYearInvoicings": [
        {
            "Janeiro": 100
        },
        {
            "Fevereiro": 200
        },
        {
            "Março": 300
        },
        {
            "Abril": 400
        },
        {
            "Maio": 590
        },
        {
            "Junho": 600
        },
        {
            "Julho": 700
        },
        {
            "Agosto": 800
        },
        {
            "Setembro": 900
        },
        {
            "Outubro": 1000
        },
        {
            "Novembro": 1100
        },
        {
            "Dezembro": 1200
        },
        {
            "year": 2025
        }
    ],
    "lastYearInvoicings": [
        {
            "Janeiro": 50
        },
        {
            "Fevereiro": 100
        },
        {
            "Março": 150
        },
        {
            "Abril": 200
        },
        {
            "Maio": 250
        },
        {
            "Junho": 300
        },
        {
            "Julho": 350
        },
        {
            "Agosto": 400
        },
        {
            "Setembro": 450
        },
        {
            "Outubro": 500
        },
        {
            "Novembro": 550
        },
        {
            "Dezembro": 600
        },
        {
            "previousYear": 2024
        }
    ]
}
```

<h3 id="get-channels">GET /orders/channels</h3>

**RESPOSTA**

```json
[
    {
        "channelTag": "menu-facil",
        "qtdItems": "2",
        "qtdOrders": "1",
        "total": "85.85",
        "ticket": 85.85,
        "percent": 20.194298080541962
    },
    {
        "channelTag": "pdv-facil",
        "qtdItems": "5",
        "qtdOrders": "4",
        "total": "267.48",
        "ticket": 66.87,
        "percent": 62.918705306736925
    },
    {
        "channelTag": "totem",
        "qtdItems": "14",
        "qtdOrders": "11",
        "total": "71.79",
        "ticket": 6.526363636363637,
        "percent": 16.886996612721113
    }
]
```

### Seru API

| rota                              | descrição                                      |
| --------------------------------- | ---------------------------------------------- |
| <kbd>GET /seru-api/populate</kbd> | Popula o banco de dados com pedidos de exemplo |

<h2 id="commands">💻 Comandos</h2>

Aqui estão alguns comandos úteis para interagir com o projeto com Docker:

| comando                               | descrição                                   |
| ------------------------------------- | ------------------------------------------- |
| <kbd>npm run docker:up</kbd>          | Cria e inicia os containers docker          |
| <kbd>npm run docker:stop</kbd>        | Pausa os containers docker                  |
| <kbd>npm run docker:down</kbd>        | Destrói os containers docker                |
| <kbd>npm run docker:down:volume</kbd> | Destrói os containers docker e seus volumes |

<h2 id="uiux">🎨 UI/UX</h2>

O processo de UI/UX desse projeto foi desenvolvido com a ferramenta `Figma`, utilize o seguinte link para visualizar o projeto inteiro:

[Arquivo Figma](https://www.figma.com/design/5hBkIORTjnsMv7russVEBk/RS-Solutions-Challenge---Hackathon?node-id=0-1&t=GdaePGOE4YpmQntp-1)

### Layout do projeto

![image](https://github.com/user-attachments/assets/cfba7587-47fe-4199-b8d8-8915f00c2d7d)
![image](https://github.com/user-attachments/assets/fd2fdbd3-3945-488d-82bf-4f9aef4c896f)
![image](https://github.com/user-attachments/assets/51267553-c90b-445b-9f1d-c317905ad3ff)

<h2 id="collaborators">🤝 Colaboradores</h2>

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
