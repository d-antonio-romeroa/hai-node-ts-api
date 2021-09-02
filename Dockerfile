FROM node:14.17.6-alpine3.14 as base
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
RUN npm run build
# CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]
# RUN npm run start

FROM base as production

ENV NODE_PATH=./build

RUN npm run build