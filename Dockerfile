FROM node:lts
WORKDIR /papercuts

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "node", "server/server.js" ]
