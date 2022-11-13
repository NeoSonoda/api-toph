FROM node:16-alpine

EXPOSE 80
ENV ENV=production

WORKDIR /

COPY package*.json ./
COPY . .
RUN node -v

RUN npm install
COPY . .

CMD ["npm","start"]

# RUN chmod +x scripts/deploy_aws_ecs.sh
# CMD ["bash", "-c", "scripts/deploy_aws_ecs.sh"]
# CMD ["npm start", "dist/index.js"]
# docker build -t api-service .
# docker run -it -p 80:80 api-service
