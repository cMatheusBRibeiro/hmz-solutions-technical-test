# Objetivo

Este repositório é destinado a armazenar os códigos referentes ao teste técnico da HMZ Solutions.

# Front-end

O front-end foi desenvolvido com as seguintes versões:

| Nome | Versão   |
| ---- | -------- |
| Node | v20.18.0 |
| Yarn | 1.22.22  |
| npm  | 11.2.0   |

Para executar, é necessário clonar o repositório para a máquina onde irá executá-lo, ir para a raiz do projeto, instalar as dependências utilizando o gerenciador de sua preferência, criar o arquivo ".env" e, por fim, rodar os comandos de "build" e "start".

## Exemplo de arquivo .env

O projeto foi desenvolvido utilizado a API de exemplo "https://reqres.in/", dessa forma as variáveis do .env devem estar enviando para lá, por exemplo:

```env
NEXT_PUBLIC_BACKEND_URL=https://reqres.in/api/
NEXT_PUBLIC_BACKEND_API_KEY=reqres-free-v1
```

Assim as duas variáveis utilizadas no sistema serão satisfeitas.

## Exemplo de execução

1. Instalar as dependências

```cmd
yarn

ou

npm install
```

2. Compilar o projeto

```cmd
yarn build

ou

npm run build
```

3. Executar o projeto como produção

```cmd
yarn start

ou

npm start
```

Dessa forma, subirá o mesmo servidor que seria rodado em produção, com todos os arquivos compilados previamente utilizando a tecnologia SSR (Server Side Rendering).

A rota em que o sistema irá subir é [http://localhost:3000](http://localhost:3000).

## Pontos importantes

O login do projeto está implementado com a API e armazena o token localmente, caso não possua o token, o sistema não permite acessar a página de usuários.

Dessa forma, é necessário utilizar um e-mail que a API responda com sucesso e retorne o token.

Exemplos de e-mails com resposta positiva:

1. george.bluth@reqres.in
2. emma.wong@reqres.in

Com relação à senha, pode passar a que desejar.