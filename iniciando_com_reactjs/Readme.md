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

## JSX como usar

    É possível colocar códigos javascripts na renderização do elemento html, dessa forma fica bem fácil e intuitivo utilizar determinadas funções sem precisar definir uma classe ou id, pois o código JS já vai renderizar naquele ponto do html. Para utilizar esse código basta colocar o mesmo entrer chaves: 

    { new Date().toLocaleString('pt-BR') }

    É possível pegar qualquer informação de qualquer parte do código e renderizar no html utilizando o JSX.

## Entendendo props

    Todo componente possui um ciclo e todos tem as suas PROPS ou propriedades, uma maneira de manipular essas props é utilizando um constructor(), ele pega as propriedades da classe e consegue receber valores necessários para o funcionamento correto da regra de negócio. 

## Praticando props

    É possível criar um template padrão chamado de componente, esse template pode conter variáveis chamadas de props no escopo de sua estrutura, os valores dessas props podem ser declaradas na chamada desse componente, dessa forma é possível utilizar o mesmo componente com valores diferentes, obtendo o mesmo padrão de organização. Isso é principalmente útil em aplicativos e sites com muitas páginas que possuem elementos semelhantes na aparência, mas apenas com dados diferentes, com esse conceito de props é possível reutilizar o template e modificar os dados apresentados nele.

## Entendendo o state

    São coisas únicas do componente. São os dados exclusivos do componente, não podem ser modificados, apenas utilizados e consultados. Captura de informação de uma API, regras de negócios é necessário utilizar o state. Não é possível transitar dados no states, eles são exclusivos daquele componente. Dados de State geralmente são para mostrar algo, por exemplo utiliza os states para consumir os json de uma api e organiza-las no seu componente.

## Praticando state e ciclo de vida componentes

    Todo componente tem um ciclo de vida que vai do momento que ele é chamado até ele não mais existir no DOM ou VDOM ou na tela. O método Componente têm algumas funções capazes de manipular esses eventos de ciclo de vida, como o componentDidMount e componenteWillMount. Para poder mudar os States, é necessário sempre chamar o método setState, desta forma o state vai ser modificado da maneira como você estruturar. Toda vez que o state for modificado a função de render também será atualizada, então toma cuidado ao se utilizar um componente global e um setState de segundos, para que a página não fique atualizando a todo momento. Sempre que utilizar um setInteval, deve-se uitilizar também um clearInterval para que o set não permanessa ao sair da página.

## Trabalhando com eventos

    Utiliza-se o JSX para tratar eventos no componente, sempre utilizar a forma de escrita Capitalize, pex: onClick. Sempre verificar se os contextos correspondem, caso não correspondam utilize o bind(context), para que os contextos se igualem.

## Oneway bind e listas

    Fluxo unidirecional de dados, em que os dados só vão, não voltam. É possível utilizar os eventos de click para puxar um script que interaja com os states dados, dessa forma é possível pegar os dados desses states e colocar no template utilizando JSX.