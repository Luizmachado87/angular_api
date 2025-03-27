
# Projeto Angular

Este é um projeto construído com **Angular**, uma plataforma de desenvolvimento web para criar aplicações de página única (SPA).

## Pré-requisitos

Antes de iniciar, verifique se você tem os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [Angular CLI](https://angular.io/cli) (versão 12.x ou superior)

### Instalação do Angular CLI
Caso não tenha o Angular CLI instalado, execute o seguinte comando:

```bash
npm install -g @angular/cli
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/SEU_PROJETO_ANGULAR.git
```

2. Navegue até a pasta do projeto:

```bash
cd SEU_PROJETO_ANGULAR
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento e rodar o projeto em seu navegador, use o comando:

```bash
ng serve
```

Abra o navegador e acesse a URL:

```
http://localhost:4200
```

### Comandos úteis

- **`ng serve`**: Inicia o servidor de desenvolvimento.
- **`ng build`**: Compila o projeto para produção (os arquivos serão gerados na pasta `dist/`).
- **`ng test`**: Executa os testes unitários com o Karma.
- **`ng lint`**: Verifica o código em busca de problemas de estilo.
- **`ng e2e`**: Executa os testes de ponta a ponta (end-to-end).

## Estrutura do projeto

A estrutura do projeto Angular é a seguinte:

```
src/
├── app/
│   ├── components/       # Componentes reutilizáveis
│   ├── services/         # Serviços para consumir APIs ou lógica de negócio
│   ├── models/           # Modelos de dados
│   └── app.component.ts  # Componente principal da aplicação
├── assets/               # Imagens, fontes e outros recursos estáticos
├── environments/         # Arquivos de configuração para diferentes ambientes
├── index.html            # HTML principal da aplicação
└── main.ts               # Arquivo principal que inicializa o Angular
```

## Testes

Este projeto usa o **Karma** e o **Jasmine** para testes unitários. Para rodar os testes:

```bash
ng test
```

## Build para Produção

Para compilar a aplicação para produção, execute:

```bash
ng build --prod
```

Isso gera os arquivos otimizados e prontos para o deploy na pasta `dist/`.

## Deploy

Após gerar a build de produção, você pode hospedar os arquivos estáticos gerados no servidor de sua escolha, como **Firebase**, **Netlify**, **Vercel**, entre outros.

### Exemplos de deploy:

- [Deploy no Firebase](https://angular.io/guide/deployment)
- [Deploy no Netlify](https://angular.io/guide/deployment)

## Contribuindo

Se você deseja contribuir com o projeto:

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas alterações.
3. Envie um pull request com uma descrição detalhada das alterações.

## Licença

Este projeto está sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
