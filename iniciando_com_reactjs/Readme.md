# Iniciando com react.js

    Precisa de Node.js OK
    NPM OK 
    Visual Studio Cod OK
    Browser OK
    Conhecimento em Javascript OK

## Conceitos iniciais
    Reactjs é uma lib, que contém funções para resolver determinados problemas do dia a dia. Utiliza de componentes reutilizáveis para poder alocar em locais diferentes.
    Facilidade de criar componentes reutilizáveis.
    Trabalhar com V-DOM, trazendo maior performance
    Fácil manipulação e extensão dos componentes devido ao uso de JSX.
    Virtual DOM -> Virtualização do DOM para facilitar a manipulação do mesmo.

## Criando projeto de 3 maneiras
    1. pode importar um script e utilizar sem precisar instalar
    2. Criar um html e importar os scripts dentro do html, precisa dos scripts de react e também os scripts do preprocessador babel
    3. Utilizar um boyler plate, para poder trabalhar corretamente num projeto para a produção.
    
    npm install create-react-app -g

    create-react-app <NAME>

## Primeiro componente e conceitos por trás

    A classe APP herda os métodos da classe Componente do react, dentro da função render é possível utilizar a notação JSX que é basicamente uma forma de executar javascript dentro de um template html.
    Toda aplicação reactjs precisa utilizar o ponto de início: 

    ReactDOM.render(<App />, document.getElementById('root'));

    Para cada componente que for criado é necessário criar um arquivo próprio, dessa forma esse componente pode ser reutilizado em qualquer parte do sistema, o que ajuda bastanta na hora de recriar um site com componentes semelhantes.