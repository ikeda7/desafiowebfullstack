# desafiowebfullstack
Projeto Web Full Stack

Este projeto é uma aplicação full stack desenvolvida utilizando Angular no frontend, Express.js no backend, Prisma como ORM e PostgreSQL como banco de dados, rodando dentro de um container Docker.

O Frontend não foi desenvolvido corretamente por questões de conhecimentos pessoais, estou enviando tudo aquilo que consegui fazer.

Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js
Docker
Docker Desktop
Angular CLI

Passos para rodar o projeto
1. Clonar o repositório

git clone https://github.com/ikeda7/desafiowebfullstack.git
cd desafiowebfullstack

2. Configurar o banco de dados com Docker Desktop
Para rodar o banco de dados PostgreSQL usando o Docker Desktop, siga os seguintes passos:

Certifique-se de que o Docker Desktop está rodando.

Execute o seguinte comando no terminal para iniciar um container PostgreSQL:

docker run --hostname=9487ae9b52d0 --env=POSTGRES_PASSWORD=postgres --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/lib/postgresql/17/bin --env=GOSU_VERSION=1.17 --env=LANG=en_US.utf8 --env=PG_MAJOR=17 --env=PG_VERSION=17.0-1.pgdg120+1 --env=PGDATA=/var/lib/postgresql/data --volume=/var/lib/postgresql/data --network=bridge -p 5432:5432 --restart=no --runtime=runc -d postgres


Ótimo! Vou atualizar o README para incluir a informação sobre o Docker Desktop. Aqui está a versão revisada:

Desafio Web Full Stack
Este projeto é uma aplicação full stack desenvolvida utilizando Angular no frontend, Express.js no backend, Prisma como ORM e PostgreSQL como banco de dados, rodando dentro de um container Docker. O Docker Desktop é utilizado para gerenciar os containers.

Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js
Docker Desktop
Angular CLI
Passos para rodar o projeto
1. Clonar o repositório
bash
Copiar código
git clone https://github.com/ikeda7/desafiowebfullstack.git
cd desafiowebfullstack
2. Configurar o banco de dados com Docker Desktop
No diretório raiz do projeto, há um arquivo docker-compose.yml configurado para rodar o banco de dados PostgreSQL em um container Docker. Para iniciar o banco de dados, siga os passos abaixo:

Certifique-se de que o Docker Desktop está rodando.

No terminal, execute o comando:

bash
Copiar código
docker-compose up -d
Isso irá criar e iniciar um container com PostgreSQL rodando na porta 5432.

3. Rodar o backend (Express.js)
Navegue até o diretório do backend:
cd backend

Instale as dependências do projeto:
npm install

Configure as variáveis de ambiente:
Crie um arquivo .env no diretório backend com as seguintes configurações:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"

Execute as migrações do Prisma:
npx prisma migrate dev

Inicie o servidor:
npm start

4. Rodar o frontend (Angular)
Navegue até o diretório do frontend:
cd ../frontend

Instale as dependências:
npm install

Inicie o servidor de desenvolvimento:
ng serve

O frontend estará disponível em http://localhost:4200.

5. Acessar a aplicação
Com o backend rodando na porta 3001 e o frontend na porta 4200, você pode acessar a aplicação em http://localhost:4200.

Tecnologias Utilizadas
Frontend: Angular
Backend: Express.js, Prisma
Banco de Dados: PostgreSQL (via Docker)
Gerenciamento de Dependências: Node.js (NPM)
Containerização: Docker, Docker Desktop