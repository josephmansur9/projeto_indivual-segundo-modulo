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
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

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

https://www.figma.com/design/mWxMVYY35qX1HZtdzik1r2/projeto-individual-UX?node-id=0-1&t=yY9yOs6GXls7o1O0-1

<img src="/assets/guiacores.png">


### 3.5. Protótipo de alta fidelidade (Semana 05)

<img src="/assets/prototipo.png">

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---
