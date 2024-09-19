# API PARA ENVIO DE E-MAIL

Está API foi desenvolvida com a linguagem de programação javascript com o intuito de entender o funcionamento da biblioteca Nodemailer, desenvolvida para o envio de e-mais
utilizando o Node.js. Como complemento utilizei o framework Express para a construção das rotas.

## Como utilizar

1. Faça o clone do projeto:
```
git clone https://github.com/DiogoSilvaBianchini/API-envio-de-email.git
```

2. Instale as dependências do projeto:
```
npm i
```
3. Crie um arquivo na raiz do projeto com o nome .env, copie todas as variáveis de ambiente do arquivo .env_samples e cole no arquivo .env.

4. Preencha as variáveis de ambiente com os seus Dados sendo:
    Variaveis de ambiente | Valor
   -----------------------| -------------------------------------------------------
    PORT                  | A porta que seu servidor irá disponibiliza a aplicação.
    SMTP_HOST             | O Host do seu servidor SMTP.
    SMTP_MAIL             | O E-mail de acesso do seu SMTP.
    SMTP_PASS             | Sua senha para o servidor SMTP.
    SMTP_PORT             | A porta de acesso ao seu servidor SMTP.

Obs: Para o teste da aplicação utilizei o servidor SMTP do próprio GMAIL. Contudo não indico para uma aplicação real devido ao seu baixo limite de E-mail diário.
