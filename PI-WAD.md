# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto
Reserva Salas

#### Autor do projeto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)


Nesse projeto sera desenvolvido um sistema de agendamentos para reserva de salas. Esse sistema tera três dados importantes para o banco de dados, uma estrutura para armazenamento de informações: o usuario, as salas e o agendamento. Nessa aplicação web também sera utilizado backend, uma implementação da lógica de negócio e conexão e frontend, uma interface intuitiva para interação do usuário. Sera feito também Personas e User Stories para ajudar no entendimento do serviço que o nosso parceiro quer. A persona vai ser uma proto persona, que sera construida na com base em supocições e palpites sobre o nosso cliente. Além disso o código inteiro sera documentado no GitHub.


---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)

A personas vai servir para representar o cliente do sistema. Com ela podemos entender mais sobre suas necessidades, comportamentos e objetivos; isso acaba ajudando no desenvolvimento de produtos e serviços.

<div align="center">
    <small><strong style="font-size: 12px;">Persona(Figura 1);</strong></small><br>
        <img src="/foto_persona1.png">
    <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pelos autores (2025)</small>
</div>


### 2.2. User Stories (Semana 01)

Como estudante universitário, quero poder reservar salas de estudo, para que eu possa estudar nelas.

Como estudante universitário, quero que o sistema tenha um sistema de login, para que eu possa acessar o sistema de diferentes dispositivos

Como pessoa que usa o celular regularmente, quero que o sistema me lembre das reservas com uma notificação, para que eu possa me lembrar das reservas

A terceira user story se encaixa em cada um dos critérios INVEST pois

I – A notificação não depende de outros usuários do sistema.<br>
N – O modelo, ou como a notificação aparece pode ser negociado ao longo do projeto<br>
V – Valiosa porque lembra a pessoa que ela tem uma reserva<br>
E – Estimavel porque é possivel fazer um estudo que compara as pessoas que lembram de usar a sala com a notificação x quem não usa a notificação<br>
S – É algo simples facil e gerenciável de fazer<br>
T – É pode testar com usuários se a notificação aparece quando ativada

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

<div align="center">
    <small><strong style="font-size: 12px;">banco de dados(Figura 1);</strong></small><br>
        <img src="/assets/foto_diagrama.png">
    <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pelos autores (2025)</small>
</div>

A tabela "users" vai conter o id do usuario que vai ser a primary key, ela também tera o nome do usuario que podera ter até 50 palavras, o sobrenome e o id do curso que sera em numeros inteiros. 
A tabela cursos foi criada para facilitar na identificação do usuário, o id do curso sera o mesmo id cursos da tabela users, além disso a tabela users tera o nome do curso e o nome de um coordenador caso algo de errado na reserva e um responsavel precise ser contatado.
A terceira tabela sera rooms que tera uma capacidade em numeros inteiros, o id da sala e o nome da sala que estara linkado com o id do usuario. 
Por fim a tabela de reservas tera um id da reserva, o id do usuario e o id da sala, uma data da reserva que vai estar em timestamp e uma descrição para ajudar a pessoa a lembrar para o que reservou a sala com um maximo de até 100 palavras. O user id vai referenciar o nome da sala que por sua vez esta referenciando o id do usuario; e o id da sala vai referenciar o id da sala da tabela sala.

<a href="/scripts/init.sql">Clique aqui</a> para ir para o modelo físico com o Schema do BD (arquivo .sql)

### 3.1.1 BD e Models (Semana 5)
Na estrutura MVC os Models interagem com o banco de dados diretamente, os métodos são acionados pelos controllers e executam ações CRUD como criar, ler, atualizar e deletar. Esse sistema possui 3 models, sendo booking, room e user.
No model Booking por exemplo, ele contém funções específicas, tais como:

getAllRooms(): Executa uma query SELECT para retornar todos os registros da tabela bookings.
getRoomById(id): Recebe o parâmetro id e executa uma query SELECT filtrando uma reserva específica pelo booking_id.
createRoom(data): Recebe os dados de uma nova reserva e executa uma query INSERT para armazená-la na tabela bookings.
updateRoom(id, data): Recebe um id e os novos dados para atualizar o registro correspondente usando uma query UPDATE na tabela bookings.
deleteRoom(id): Recebe o id e executa uma query DELETE para remover a reserva do banco.

Os outros dois models seguem padrões muito parecidos.
### 3.2. Arquitetura (Semana 5)

foto
<img src="/assets/f.png">

### 3.3. Wireframes (Semana 03)

<div align="center">
    <small><strong style="font-size: 12px;">wireframe1(Figura 1);</strong></small><br>
        <img src="/assets/wireframe1.jpg">
    <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pelos autores (2025)</small>
</div>

<div align="center">
    <small><strong style="font-size: 12px;">wireframe2(Figura 1);</strong></small><br>
        <img src="/assets/wireframe2.jpg">
    <small style="margin-top: 4px; font-size: 10px;">Fonte: Material produzido pelos autores (2025)</small>
</div>

### 3.4. Guia de estilos (Semana 05)


### Guia de Cores

<img src="/assets/guiacores.png">

### Guia de Estilos

<img src="/assets/guiaestilos.png">

---

Todo o design foi desenvolvido no Figma e está disponível para visualização através do seguinte link:

[Link para o projeto no Figma](https://www.figma.com/design/mWxMVYY35qX1HZtdzik1r2/projeto-individual-UX?node-id=0-1&t=yY9yOs6GXls7o1O0-1)


### 3.5. Protótipo de alta fidelidade (Semana 05)

### Tela de Login

<img src="/assets/telalogin.png">

### Tela de Reservas

<img src="/assets/telareserva.png">

### Tela de Cadastro

<img src="/assets/telacadastro.png">

### Tela de Notificações

<img src="/assets/telanoti.png">


### 3.6. WebAPI e endpoints (Semana 05)
Em uma aplicação web, os endpoints são como os endereços específicos para onde você envia requisições e de onde recebe respostas. Cada endpoint tem uma rota especifica para buscar ou deletar dados por exemplo. Os endpoints são muito importantes para API's, mantendo uma estrutura organizada e segura, como os exemplos a seguir:

# Rotas da API de Booking

| Método | Rota      | Descrição           | Controller                     |
|--------|-----------|---------------------|--------------------------------|
| `GET`  | `/`       | Listar todos        | `bookingController.getAllBookings` |
| `GET`  | `/:id`    | Obter detalhes      | `bookingController.getBookingById` |
| `POST` | `/`       | Criar novo          | `bookingController.createBooking` |
| `PUT`  | `/:id`    | Atualizar existente | `bookingController.updateBooking` |
| `DELETE`|`/:id`    | Deletar registro    | `bookingController.deleteBooking` |

---

# Rotas da API de Room

| Método | Rota      | Descrição           | Controller                     |
|--------|-----------|---------------------|--------------------------------|
| `GET`  | `/`       | Listar todos        | `roomController.getAllRooms`   |
| `GET`  | `/:id`    | Obter detalhes      | `roomController.getRoomById`   |
| `POST` | `/`       | Criar novo          | `roomController.createRoom`    |
| `PUT`  | `/:id`    | Atualizar existente | `roomController.updateRoom`    |
| `DELETE`|`/:id`    | Deletar registro    | `roomController.deleteRoom`    |
### 3.7 Interface e Navegação (Semana 07)



Para essa entrega foi feita uma integração front-back com fetch API usada para buscar/enviar dados. As views consequentemente foram conectadas com o banco de dados; além disso, foi feita uma estilização CSS das páginas HMTL como as telas a seguir:


<div align="center">
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

As telas seguem uma ordem lógica, onde o usuario vai da tela de login para a tela de reserva caso ele tenha uma conta. Se o usuario não tem conta ele cria uma, volta para a tela de login e entra na tela de reservas.

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)
[clique aqui para acessar o vídeo](https://drive.google.com/file/d/1MgkW4vOV5mlHG86UxLpAJELrpNq9UCEQ/view?usp=sharing)

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

Eu queria ter melhorado o Frontend da minha aplicação, acredito que poderia ter feito uma interface mais simples e intuitiva que ajudaria na uso da aplicação. Eu aprendi bastante sobre banco de dados e o modelo MVC, as constulas etc. Acho que o backend foi mais difícil mas consegui fazer uma vez que aprendi direito a base.

Um ponto que funcionou bem foi a organização, com os arquivos separados nas pastas corretas eu consegui trabalhar mais rapidamente no projeto com menos chance de erro também.



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
