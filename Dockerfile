FROM node:lts
WORKDIR /papercuts

COPY . .

RUN npm install
RUN webpack

EXPOSE 3000

CMD [ "node", "server.js" ]
