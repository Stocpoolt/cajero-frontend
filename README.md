# @Stocpoolt

# ------------------------------------
# cajero-frontend

# 6.
-cajero-frontend
    -src
        -components
• Eliminar el archivo HelloWorld.vue
• Editar el archivo App.vue

# 7.
• Ejecutar los siguientes comandos en la raíz del proyecto:
    npm install --save axios
    npm install --save vue-router

# 8.
• En la carpeta src, al mismo nivel de App.vue, crear:
    -src
        router.js

• En carpeta components construir y modificar archivo User.vue y UserBalance.vue:
    -components
        User.vue
        UserBalance.vue

• Modificar archivo App.vue:
    -src
        App.vue
        
# 9.
Para correr la app localmente
# --- AL MISMO TIEMPO ---
    • En la raíz del proyecto de FastAPI (backend):
        uvicorn main;api --reload
    • En la raíz del proyecto de Vue (frontend):
        npm run start
# -----------------------

# 10.
• En la raíz del frontend, crear y modificar archivo server.js:
    -cajero-frontend
        server.js
• Modificar archivo package.json:

# 11.
• Ejecutar el siguiente comando (instalación de servidor Express):
        npm install express serve-static --save
• En la raíz del proyecto, crear un directorio llamado dist:
    -cajero-frontend
        -dist
• Ejecutar en el frontend:
    npm run build
• Como verificaión previa, desplegar el componente localmente:
    node server.js
• Subir los cambios al repositorio de GitHub.

# 12.
• Crear nueva aplicación en Heroku (cajero-frontend) y conectar el repo de GitHub

# 13.
# En backend
• Añadir URI del componente desplegado en Heroku,
    -cajero-backend
        main.py
            origins = [
                "...",
                "...",
                "https://stocpoolt-cajero-frontend.herokuapp.com"
            ]
# 14.
# En frontend
• Modificar las URIs, apuntar la dirección del componente lógico desplegado en Heroku:
    -cajero-frontend
        -src
            -components
                UserBalance.vue
                    axios.get("https://stocpoolt-cajero-backend.herokuapp.com/user/balance/" + this.username)