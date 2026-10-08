# Pokédex

Aplicativo web de Pokédex que permite ao usuário pesquisar Pokémon por nome utilizando a [PokéAPI](https://pokeapi.co/). Ao encontrar um Pokémon, o usuário poderá visualizar informações básicas sobre ele e acessar uma página com seus detalhes.

## MVP

A primeira versão do projeto terá como objetivo implementar as funcionalidades essenciais da Pokédex.

### Search Bar

Campo de busca onde o usuário poderá digitar o nome de um Pokémon.

* Buscar Pokémon através da PokéAPI
* Permitir busca pelo nome do Pokémon
* Exibir o resultado quando o Pokémon for encontrado
* Tratar casos em que o Pokémon não existe ou não foi encontrado

### Pokémon Card

Componente responsável por apresentar um resumo das informações do Pokémon encontrado.

O card deverá apresentar, inicialmente:

* Nome do Pokémon
* Imagem
* Tipo(s)
* Informações básicas relevantes

O card também deverá possuir um botão para acessar a visualização detalhada do Pokémon.

### Pokémon Details

View com informações mais detalhadas sobre o Pokémon.

Essa visualização será acessada através do Pokémon Card e deverá apresentar informações adicionais obtidas através da PokéAPI.

### Search History

Cada vez que um Pokémon for pesquisado e encontrado, seu Pokémon Card deverá ser adicionado ao histórico de pesquisas na tela principal.

O histórico deverá:

* Manter os Pokémon pesquisados anteriormente
* Exibir os cards dos Pokémon encontrados consecutivamente
* Permitir que o usuário acesse novamente os detalhes de cada Pokémon

### Clear History

Botão que permite ao usuário limpar todos os Pokémon presentes no histórico de pesquisas.

---

## Tech Stack

O projeto será desenvolvido utilizando:

* **Vite**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **PokéAPI** — API utilizada para obter os dados dos Pokémon

---

# Futuras Funcionalidades

As funcionalidades abaixo estão fora do escopo do MVP inicial e poderão ser implementadas posteriormente.

### Evolution Tree

Caso o Pokémon possua evoluções, exibir sua linha evolutiva após a pesquisa.

A ideia inicial é apresentar os Pokémon da evolução lado a lado utilizando Pokémon Cards.

### Stats Chart

Adicionar uma representação visual dos atributos do Pokémon através de gráficos, semelhante à forma como os status são apresentados em videogames.

Possíveis atributos:

* HP
* Attack
* Defense
* Special Attack
* Special Defense
* Speed

### GIF Scare

Para determinados Pokémon, a imagem exibida no card poderá ser substituída rapidamente por um GIF antes de retornar à imagem original.

Essa funcionalidade será utilizada como um elemento surpresa/extra da aplicação.

### Theme Selection

Adicionar diferentes temas visuais para a aplicação.

Possíveis temas:

* Dark Mode
* Light Mode
* Poké Mode

---

# Estrutura Geral

A aplicação terá como fluxo principal:

```text
Usuário
   ↓
Search Bar
   ↓
PokéAPI
   ↓
Pokémon encontrado
   ↓
Pokémon Card
   ↓
Pokémon Details
```

Os Pokémon encontrados também serão adicionados ao histórico:

```text
Search Bar
   ↓
Pokémon encontrado
   ↓
Search History
   ↓
Pokémon Cards
   ↓
Clear History
```

---

# Objetivo do Projeto

Criar uma aplicação web de Pokédex simples, responsiva e organizada, utilizando React + TypeScript para a construção da interface e integração com a PokéAPI.

O desenvolvimento será dividido inicialmente entre as funcionalidades necessárias para o **MVP**, deixando as funcionalidades extras para futuras iterações do projeto.
