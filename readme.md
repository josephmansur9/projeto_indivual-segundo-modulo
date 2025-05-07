O sistema escolhido foi o de sistema de reservas. Foi pensado que para fazer a reserva o usuário teria primeiro uma identificação com nome, sobrenome e curso. Também teria uma tabela de curso, que teria o id_curso da pessoa e um coordenador caso algo de errado acontecesse na reserva e um responsável precisasse ser consultado. Depois, uma tabela de salas, que teria o ID da sala, o nome da sala e a capacidade. Por fim, uma tabela de reservas que teria o ID do usuário, da sala e da reserva, com uma descrição.

A estrutura das pastas é o modelo SQL. Ela vai estar assim: 

```
meu-projeto/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── database.js
├── controllers/           # Lógica de controle das requisições
│   └── HomeController.js
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── User.js
├── routes/                # Definição das rotas do sistema
│   └── index.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
├── scripts/               # Arquivos de JavaScript públicos
├── styles/                # Arquivos CSS públicos
├── tests/                 # Arquivos de testes unitários
│   └── example.test.js
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env.example           # Arquivo de exemplo para variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── readme.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)

```

para executar o projeto localmente voce precisa executar o código "npm install" no terminal e depois "node sever.js" também no terminal do projeto