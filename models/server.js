//
const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //*!middlewares
        this.middlewares();

        //*! rutas de la aplicacion
        this.routes();
    }

    middlewares() {
        //*!  CORS
        this.app.use(cors());

        //*!  lecturay parseo del body
        this.app.use(express.json())

        //*!  directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at port ${this.port}`)
        });
    }
}

module.exports = Server;