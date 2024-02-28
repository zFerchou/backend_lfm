"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
    config() {
        // configuración del puerto para el servidor
        this.app.set("port", 3000);
        // muestra las peticiones en consola
        this.app.use((0, morgan_1.default)("dev"));
        // puertos de conexión de la API
        this.app.use((0, cors_1.default)());
        // solo se permiten peticiones en formato JSON
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false, }));
    }
    routes() {
    }
}
const server = new Server();
//# sourceMappingURL=app.js.map