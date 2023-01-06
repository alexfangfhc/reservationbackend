FROM node:14

WORKDIR /app
COPY ./ /app
RUN chmod -R 777 /app
RUN npm install
CMD npm run graphqlserver

