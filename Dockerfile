FROM node:20

WORKDIR /app

COPY . .

RUN npm install && npm run build

RUN npm install -g serve

CMD ["serve", "dist", "-l", "8080"]
