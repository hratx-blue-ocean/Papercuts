FROM node:lts
WORKDIR /papercuts

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server/server.js" ]