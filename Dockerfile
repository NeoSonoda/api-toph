FROM node:12-alpine

EXPOSE 80
ENV ENV=production

COPY package*.json ./
COPY . .
FROM node:16-alpine as development
RUN npm i sequelize-cli
RUN npm i
RUN node -v
COPY . .

CMD ["npm","start"]

# RUN chmod +x scripts/deploy_aws_ecs.sh
# CMD ["bash", "-c", "scripts/deploy_aws_ecs.sh"]
# CMD ["npm start", "dist/index.js"]
# docker build -t api-service .
# docker run -it -p 80:80 api-service
