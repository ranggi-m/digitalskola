FROM node:18-alpine

WORKDIR /app

# copy package dulu (biar cache efisien)
COPY package*.json ./

RUN npm install

# copy semua file project
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
