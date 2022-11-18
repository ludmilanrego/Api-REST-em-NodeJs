# API-REST-em-NodeJs
Aplicação utiliza NodeJs e Express responsável  por fazer operações sobre um banco de dados de alunos e de cursos disponíveis.

Operações realizadas:

- Validação de senha para habilitar acesso a dados
- Cadastro de novo aluno
- Busca de aluno dentro do cadastro
- Atualização do curso do aluno
- Atualização completa de dados de aluno cadastrado
- Remoção de aluno cadastradado do banco de dados


## Como rodar o projeto 
---
1 - Tenha certeza que o npm está instalado. Para isso use o comando `npm -v`

2 - Com o npm instalado rode o rode em seguida:
- `npm i`
- `npm run dev`

## Testando a aplicação
----

Para testar a aplicação usa-se uma senha como parametro na url. A `senha` utilizada foi: `cubos123`

### * Listar todos os alunos 
#### GET /alunos

##### Este endpoint irá retornar uma lista com todos os alunos cadastrados

Curl: curl --request GET \
  --url 'http://localhost:3000/alunos/?senha=cubos123'

### * Buscar aluno por id dentro do cadastro
#### GET /alunos/id

##### Este endpoint irá retornar o aluno pesquisado 

Curl:curl --request GET \
  --url 'http://localhost:3000/alunos/1/?senha=cubos123' \
  --header 'Content-Type: application/json'

### * Cadastrar aluno 
#### POST /alunos

##### Este endpoint irá cadastrar um novo aluno 

Curl:curl --request POST \
  --url 'http://localhost:3000/alunos/?senha=cubos123' \
  --header 'Content-Type: application/json' \
  --data '{
		"nome": "Marcos",
		"sobrenome": "Silveira",
		"idade": 36,
		"curso": "biologia"
	}'

### * Alterar curso 
#### PATH /alunos/id

##### Este endpoint irá alterar o curso cadastrado para o aluno do id especificado

Curl:curl --request PATCH \
  --url 'http://localhost:3000/alunos/1/?senha=cubos123' \
  --header 'Content-Type: application/json' \
  --data '{
    "curso": "biologia"
}'
### * Alterar dados de aluno
#### PUT /alunos/id

##### Este endpoint irá alterar os dados do aluno especificado pelo id

Curl:curl --request PUT \
  --url 'http://localhost:3000/alunos/?senha=cubos123' \
  --header 'Content-Type: application/json' \
  --data '{
		"nome": "Marcos",
		"sobrenome": "Silveira",
		"idade": 36,
		"curso": "biologia"
	}'
### * Remover aluno cadastrado
#### DELETE /alunos/id

##### Este endpoint irá remover o aluno identificado pelo id da lista do banco de dados

Curl:curl --request DELETE \
  --url 'http://localhost:3000/alunos/1/?senha=cubos123' \
  --header 'Content-Type: application/json'
  
tags: backend lógica nodeJS JavaScript
