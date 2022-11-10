FROM node:12-alpine

EXPOSE 80
ENV ENV=production

COPY package*.json ./
COPY . .

RUN npm i
COPY . .


CMD ["./dist/index.js"]

# RUN chmod +x scripts/deploy_aws_ecs.sh
# CMD ["bash", "-c", "scripts/deploy_aws_ecs.sh"]
# CMD ["npm start", "dist/index.js"]
# docker build -t api-service .
# docker run -it -p 80:80 api-service
