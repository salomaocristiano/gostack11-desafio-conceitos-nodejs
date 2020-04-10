![header](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-conceitos-nodejs/master/assets/header-desafios.png)

<h3 align="center">
  Desafio Rocket Seat: Conceitos do Node.js
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/salomaocristiano/gostack11-desafio-conceitos-nodejs.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/salomaocristiano/gostack11-desafio-conceitos-nodejs.svg">

  <a href="https://www.codacy.com/app/salomaocristiano/gostack11-desafio-conceitos-nodejs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=salomaocristiano/gostack11-desafio-conceitos-nodejs&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/04db4b43120b4d05b9b39c9d2da97300.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/salomaocristiano/gostack11-desafio-conceitos-nodejs.svg">
  <a href="https://github.com/salomaocristiano/gostack11-desafio-conceitos-nodejs/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/salomaocristiano/gostack11-desafio-conceitos-nodejs.svg">
  </a>

  <a href="https://github.com/salomaocristiano/gostack11-desafio-conceitos-nodejs/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/salomaocristiano/gostack11-desafio-conceitos-nodejs.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/salomaocristiano/gostack11-desafio-conceitos-nodejs.svg">
</p>

## Screenshot

<p align="center">

![image-example](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-conceitos-nodejs/master/assets/bootcamp.jpg)

</p>

## :rocket: Sobre o desafio

Aplicação serve para armazenar repositórios de um portfólio. Permite a criação, listagem, atualização e remoção dos repositórios. Também permite que os repositórios possam receber "likes".

## Rotas da aplicação

- **`POST /repositories`**: A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: `{ id: "uuid", title: 'Desafio Node.js', techs: ["Node.js", "..."], likes: 0 }`; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota deve alterar apenas o `título`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

### Específicação dos testes

Para esse desafio temos os seguintes testes:

- **`should be able to create a new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

- **`should be able to list the repositories`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

- **`should be able to update repository`**: Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos `url`, `title` e `techs`.

- **`should not be able to update a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should not be able to update repository likes manually`**: Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota de responsável por aumentar o número de likes.

- **`should be able to delete the repository`**: Para que esse teste passe, você deve perimtir que a sua rota de delete excluia um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status `204`.

- **`should not be able to delete a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should be able to give a like to the repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição.

- **`should not be able to like a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
