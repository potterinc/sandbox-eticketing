FROM node:20

WORKDIR /vyking-casino/server_2
COPY package* .
COPY tsconfig.json .
RUN npm install
COPY src ./src
COPY .env .
RUN npm run build
EXPOSE 4000
CMD ["npm", "start"]