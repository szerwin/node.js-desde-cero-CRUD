API REST con Node.js desde Cero
En este proyecto se desarrolla una API REST como práctica de Node.js, permitiendo realizar operaciones GET, POST, PUT y DELETE sobre una base de datos gestionada con MongoDB.

Para optimizar el desarrollo, se utilizan diversas librerías clave:

Express, que facilita la creación de rutas y la gestión de solicitudes HTTP.
Nodemon, para la recarga automática del servidor tras cada cambio en el código.
Dotenv, que permite gestionar variables de entorno de manera segura.
Mongoose, una biblioteca que simplifica la creación y modelado de datos en MongoDB mediante esquemas definidos.
Esta práctica proporciona una base sólida para comprender el desarrollo backend con Node.js, la integración con bases de datos NoSQL y el uso de herramientas
modernas para mejorar la eficiencia y escalabilidad de las aplicaciones.

Herramientas Tecnológicas Utilizadas
Visual Studio Code
Git
Node.js
Postman
MongoDB Compass
Docker
Librerías Instaladas
npm i nodemon --save-dev
npm i express
npm i dotenv
npm i mongoose
npm i body-parser
npm i env-var
Comandos Utilizados
npm init – Inicializa un proyecto de Node.js.
docker compose up -d – Levanta los contenedores definidos en Docker Compose.
npm run dev – Inicia el servidor en modo desarrollo con Nodemon.
Estructura del Proyecto
El proyecto de la API REST sigue una estructura organizada dentro de la carpeta src, que contiene:

models/ → Contiene el archivo book.models.js.
routes/ → Contiene el archivo book.routes.js.
index.js → Archivo principal del servidor.
docker-compose.yml → Configuración para contenedores Docker.
.env → Archivo de variables de entorno.
.gitignore → Archivo para excluir archivos innecesarios en Git.
Descripción del Proyecto
Este proyecto permite practicar el desarrollo backend utilizando Node.js, un entorno de ejecución que facilita la creación de aplicaciones escalables y eficientes en JavaScript.

Para gestionar las solicitudes y rutas, se emplea el framework Express, que permite estructurar la API de forma modular y flexible.

La base de datos utilizada es MongoDB, un sistema NoSQL orientado a documentos, ideal para manejar grandes volúmenes de datos de manera flexible y eficiente.

Además, la práctica incorpora Docker, una plataforma de virtualización basada en contenedores que permite empaquetar y desplegar la aplicación junto con todas sus dependencias, 
asegurando consistencia en los entornos de desarrollo, prueba y producción.
