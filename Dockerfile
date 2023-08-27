FROM node:18

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]