#SUINCAP CRUD Personas
## Felix Nemecio Aguilar Mendoza

Pasos para corrar la app en un ambiente local

1. crear la base de datos en MySQL
2. modificar el archivo .env.template por .env
3. llenar las variables de entorno con tus credenciales

### ejemplo archivo .env
```
  PORT=4000
  DB=suinpac_personas_db   || Nombre de tu base de datos
  DB_USER=root             || tu usuario
  DB_PASSWORD=passroot123  || la contraseña del usuario
  DB_HOST=localhost        || el entorno donde se ejecutara
```

4. ejecutar en una terminal o power shell el comando ``npm i`` para la instalacion de las dependencias necesarias
5. ejecuar en terminal el comando ```npm start```

6. Si todo salio bien, ya podemos ver nuestro crud en localhost:4000 (o en el puerto que haya escrito en el archivo .env)
