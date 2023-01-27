# Bem vindos ao repositório Trybesmith


<strong>👨‍💻 O que foi desenvolvido</strong><br />
    Aqui você vai encontrar os detalhes de como foi estruturado este projeto e instruções para rodar.
    Neste projeto, desenvolvi uma loja de itens medievais, no formato de uma API, utilizando Typescript.
    Também foi desenvolvido todas as camadas da aplicação seguindo a arquitetura MSC, (Models, Service e Controllers).
    Por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão ou CRUD.

Você irá criar alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL.



# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## 👉 Com Docker

> Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queira fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

---
  
  ## 👉 Sem Docker
  
  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
    
  - ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br>
</details>


<details>
<summary><strong>Como ter acesso ao projeto e instalar as dependências</strong></summary><br />

    1. Entre na pasta do repositório que você acabou de clonar ou fazer o download do arquivo zip:
    * `cd pasta-do-repositório`

    2. Instale as dependências:
    *`npm install`

    3. Suba os imagens do servidor node e do banco de do docker-compose com o comando:
    *`docker-compose up -d`
    
</details>

<strong>🎲 Entidades do projeto</strong><br />
  - USER
  - ORDER
  - PRODUCT
