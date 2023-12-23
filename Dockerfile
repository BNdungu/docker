FROM node:20
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 4000
EXPOSE 3000
CMD ["npm", "run", "dev"]
