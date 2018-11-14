# Treino web

- git clone https://github.com/marcelomf/treino-web

- cd treino-web/client
- npm install
- npm run dev

- cd treino-web/server
- npm install
- node_modules/.bin/sequelize init
- node_modules/.bin/sequelize db:migrate
- export NODE_ENV=development && npm start
