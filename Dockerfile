# 1. Etapa de construcción
FROM node:18-alpine AS build

# Establecer directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos package.json y package-lock.json o yarn.lock
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# 2. Etapa de producción
FROM nginx:alpine

# Copiar archivos de build desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando por defecto para ejecutar NGINX
CMD ["nginx", "-g", "daemon off;"]
