# Imagem base
FROM node:18-alpine

ENV NODE_ENV=development

#diretório para o aplicativo
WORKDIR /app

# arquivos do aplicativo para o diretório de trabalho
COPY package*.json ./
COPY src/ ./src/
COPY public/ ./public/
COPY vite.config.js ./1
COPY index.html ./

# Instala as dependências do aplicativo
RUN npm install 

# Porta do aplicativo
EXPOSE 8080

# Execução
CMD ["npm", "run", "dev"]