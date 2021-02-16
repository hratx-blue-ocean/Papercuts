FROM node:lts
WORKDIR /papercuts

COPY . .

RUN npm install
RUN npm run webpack

EXPOSE 3000

CMD [ "node", "server.js" ]
