O nome do projeto é ReservaAluno, ele foi pensando para ajudar alunos que querem reservar salas para poderem estudar nelas. Na aplicação o usuário podera criar um login caso não tenha, onde ele será direcionado para a tela de reservas onde ele podera fazer sua reserva. Caso não tenha reserva nesse horário ela sera salva tela de notificações. Ela serve para alunos poderem ter mais segurança quando quiserem uma sala para reservar, sabendo se ela ja esta reservada.

Para executar o projeto localmente voce precisa executar o código "npm install" no terminal e depois "node sever.js" também no terminal do projeto. Depois para acessar o projeto no navegador a pessoa executa o comando "npm run dev", que te possibilitara de buscar localhost:3000 chegando na aplicação.



Alguns prints da interface:

div align="center">
    <small><strong style="font-size: 12px;">Tela de Login(Figura 1);</strong></small><br>
        <img src="/assets/Screenshot 2025-06-09 at 12.28.10.png">
    <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pelos autores (2025)</small>
</div>

<div align="center">
    <small><strong style="font-size: 12px;">Tela de Cadastro(Figura 1);</strong></small><br>
        <img src="/assets/Screenshot 2025-06-09 at 12.28.26.png">
    <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pelos autores (2025)</small>
</div>


<div align="center">
    <small><strong style="font-size: 12px;">Tela de Reservas(Figura 1);</strong></small><br>
        <img src="/assets/Screenshot 2025-06-09 at 12.28.51.png">
    <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pelos autores (2025)</small>
</div>

O link da gravação:

[clique aqui para acessar o vídeo](https://drive.google.com/file/d/1MgkW4vOV5mlHG86UxLpAJELrpNq9UCEQ/view?usp=sharing)


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