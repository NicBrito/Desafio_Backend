# Tarefas API

API RESTful para gerenciamento de tarefas, desenvolvida em Node.js com Express.js e SQLite. Permite criar, listar, buscar, atualizar e excluir tarefas, além de filtrar tarefas por status.

## Funcionalidades
- **Criar uma tarefa:** Cadastre novas tarefas com título, descrição, status e data de vencimento.
- **Listar todas as tarefas:** Obtenha uma lista de todas as tarefas cadastradas.
- **Buscar uma tarefa por ID:** Recupere os detalhes de uma tarefa específica.
- **Atualizar uma tarefa:** Modifique os dados de uma tarefa existente.
- **Excluir uma tarefa:** Remova uma tarefa do sistema.
- **Filtrar tarefas por status:** Liste tarefas com base no status (pendente, realizando, concluída).

## Tecnologias Utilizadas
- **Node.js:** Ambiente de execução JavaScript.
- **Express.js:** Framework para construção da API.
- **SQLite:** Banco de dados leve e embutido.
- **Sequelize:** ORM para interação com o banco de dados.
- **Insomnia/Postman:** Ferramentas para testar a API.

## Como Executar o Projeto

### Pré-requisitos
- **Node.js** (v18 ou superior)
- **Git**
- **SQLite3** (já vem instalado na maioria dos sistemas)

### Passos para Execução
1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/tarefas-api.git
   cd tarefas-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

4. Acesse a API:
   - O servidor estará rodando em `http://localhost:3000`.

## Endpoints da API

### 1. Criar uma Tarefa
**Método:** POST  
**URL:** `/tarefas`

**Exemplo de Requisição:**
```json
{
  "titulo": "Estudar API",
  "descricao": "Estudar como criar uma API RESTful",
  "status": "pendente",
  "data_vencimento": "2024-12-31"
}
```

**Resposta:**
```json
{
  "id": 1,
  "titulo": "Estudar API",
  "descricao": "Estudar como criar uma API RESTful",
  "status": "pendente",
  "data_vencimento": "2024-12-31T00:00:00.000Z",
  "createdAt": "2025-02-03T23:08:56.556Z",
  "updatedAt": "2025-02-03T23:08:56.556Z"
}
```

### 2. Listar Todas as Tarefas
**Método:** GET  
**URL:** `/tarefas`

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Estudar API",
    "descricao": "Estudar como criar uma API RESTful",
    "status": "pendente",
    "data_vencimento": "2024-12-31T00:00:00.000Z",
    "createdAt": "2025-02-03T23:08:56.556Z",
    "updatedAt": "2025-02-03T23:08:56.556Z"
  }
]
```

### 3. Buscar uma Tarefa por ID
**Método:** GET  
**URL:** `/tarefas/{id}`

**Resposta:**
```json
{
  "id": 1,
  "titulo": "Estudar API",
  "descricao": "Estudar como criar uma API RESTful",
  "status": "pendente",
  "data_vencimento": "2024-12-31T00:00:00.000Z",
  "createdAt": "2025-02-03T23:08:56.556Z",
  "updatedAt": "2025-02-03T23:08:56.556Z"
}
```

### 4. Atualizar uma Tarefa
**Método:** PUT  
**URL:** `/tarefas/{id}`

**Exemplo de Requisição:**
```json
{
  "titulo": "Estudar API - Revisão",
  "status": "realizando"
}
```

**Resposta:**
```json
{
  "id": 1,
  "titulo": "Estudar API - Revisão",
  "descricao": "Estudar como criar uma API RESTful",
  "status": "realizando",
  "data_vencimento": "2024-12-31T00:00:00.000Z",
  "createdAt": "2025-02-03T23:08:56.556Z",
  "updatedAt": "2025-02-03T23:09:37.188Z"
}
```

### 5. Excluir uma Tarefa
**Método:** DELETE  
**URL:** `/tarefas/{id}`

**Resposta:** Status `204 No Content`

### 6. Filtrar Tarefas por Status
**Método:** GET  
**URL:** `/tarefas?status={status}`

**Exemplo de Requisição:**
```http
GET /tarefas?status=pendente
```

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Estudar API",
    "descricao": "Estudar como criar uma API RESTful",
    "status": "pendente",
    "data_vencimento": "2024-12-31T00:00:00.000Z",
    "createdAt": "2025-02-03T23:08:56.556Z",
    "updatedAt": "2025-02-03T23:08:56.556Z"
  }
]
```

## Estrutura do Projeto
```
tarefas-api/
├── src/
│   ├── config/          # Configurações do banco de dados
│   ├── controllers/     # Lógica dos endpoints
│   ├── models/          # Definição dos modelos do banco de dados
│   ├── routes/          # Definição das rotas da API
│   └── app.js           # Configuração do servidor
├── .gitignore           # Arquivos ignorados pelo Git
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto
```