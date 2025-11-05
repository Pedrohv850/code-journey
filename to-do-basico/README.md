# To-Do List | Pedro

Uma aplicação simples e elegante de lista de tarefas (To-Do List) desenvolvida com HTML, CSS e JavaScript puro.  
O projeto permite adicionar, visualizar e remover tarefas, com armazenamento local via LocalStorage — garantindo que suas tarefas permaneçam salvas mesmo após recarregar a página.

---

# Funcionalidades

-Adicionar novas tarefas  
-Impede a criação de tarefas duplicadas  
-Remover tarefas concluídas  
-Armazenamento automático no LocalStorage  
-Interface responsiva e moderna com efeitos de hover e transição

---

# Como Funciona

-O JavaScript armazena e recupera as tarefas usando `localStorage`.
-As tarefas são renderizadas dinamicamente dentro de uma lista `<ul>`.
-Cada tarefa possui um botão que aciona a função `removeItem()` para excluí-la.
-A função `showValues()` é chamada ao carregar a página para exibir as tarefas salvas.

---

# Tecnologias Utilizadas

-HTML5 – Estrutura da página  
-CSS3 – Estilização e efeitos visuais  
-JavaScript (ES6) – Manipulação de dados e DOM  
-LocalStorage API – Persistência de dados no navegador  
-Google Fonts (Roboto) – Tipografia moderna

---

# Detalhes de Estilo

-Paleta escura e contrastante (`#000000`, `#1e1e1e`, `#2c2c2c`)  
-Efeito gradiente animado em cada tarefa ao passar o mouse  
-Botões arredondados com ícones SVG personalizados  
-Layout responsivo com `flexbox` e `max-width` de 500px
