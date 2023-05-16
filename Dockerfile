FROM node:16

COPY . .

RUN npm i

RUN npm install pm2 -g

CMD [ "pm2-runtime", "npm", "--", "start" ]