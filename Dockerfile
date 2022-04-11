from node:16-alpine

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

RUN cp .env.example .env

CMD ["npm","start"]