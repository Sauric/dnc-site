FROM node:19.5.0-alpine

COPY . .

RUN npm i

RUN npm install pm2 -g

CMD [ "pm2-runtime", "npm", "--", "start" ]