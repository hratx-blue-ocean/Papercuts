FROM node:lts
WORKDIR /papercuts

COPY . .

RUN apt-get update && apt-get install -y &&\
 npm install && \
 npm run build


EXPOSE 3000

CMD [ "node", "server/server.js" ]
