const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnóstica autoconvocada
// Agnóstica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis () ultimos
(async () => {
    main()
})()