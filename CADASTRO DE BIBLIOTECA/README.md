# API-REST-em-NodeJs
Aplicação utiliza NodeJs e Express responsável  por fazer operações sobre um banco de dados de livros disponíveis em uma biblioteca.

Operações realizadas:

- Cadastro de novo livro
- Busca de livro dentro do cadastro
- Substituição de livro
- Atualização de dados do livro
- Remoção de livro cadastradado do banco de dados


## Como rodar o projeto 
---
1 - Tenha certeza que o npm está instalado. Para isso use o comando `npm -v`

2 - Com o npm instalado rode o rode em seguida:
- `npm i`
- `npm run dev`

## Testando a aplicação
----
### * Listar todos os livros 
#### GET /livros

##### Este endpoint irá retornar uma lista com todos os livros cadastrados

Curl: curl --request GET \
  --url http://localhost:5000/livros

### * Buscar livro por id dentro do cadastro
#### GET /livros/id

##### Este endpoint irá retornar o livro pesquisado 

Curl:curl --request GET \
  --url http://localhost:5000/livros/5

### * Cadastrar livro 
#### POST /livro

##### Este endpoint irá cadastrar um novo livro 

Curl:curl --request POST \
  --url http://localhost:5000/livros \
  --header 'Content-Type: application/json' \
  --data '{
	"titulo": "Jonas e a pedra sentimental",
	"autor": "Clarice Crawling",
	"ano": "2015",
	"numPaginas": 184
}'

### * Substituir livro cadastrado no id
#### PUT /livros/id

##### Este endpoint irá manter o id e alterar todos os dados vinculados a ele

Curl:curl --request PUT \
  --url http://localhost:5000/livros/2 \
  --header 'Content-Type: application/json' \
  --data '{
	"titulo": "Teste",
	"autor": "C",
	"ano": "2020",
	"numPaginas": 200
}'
### * Alterar dados de livro
####  PATH /livros/id

##### Este endpoint irá alterar os dados do livro especificado pelo id

Curl:curl --request PATCH \
  --url http://localhost:5000/livros/3 \
  --header 'Content-Type: application/json' \
  --data '{
	"titulo": "Teste2",
	"autor": "C"
}'
### * Remover livro cadastrado
#### DELETE /livros/id

##### Este endpoint irá remover o livro identificado pelo id da lista do banco de dados

Curl:curl --request DELETE \
  --url http://localhost:5000/livros/3

tags: backend lógica nodeJS JavaScript
