FROM node:lts
WORKDIR /papercuts

COPY . .

RUN npm install \
  && npm run build

EXPOSE 3000

CMD [ "node", "server/server.js" ]