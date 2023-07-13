# Build BASE
FROM node:16-alpine as BASE

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

COPY . .
RUN npm run build

EXPOSE 4173

CMD ["npm","run", "preview"]
