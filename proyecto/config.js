"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_UDI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_UDI = process.env.MONGODB_UDI || "mongodb://127.0.0.1/escuela"; //llama a la base que está en atlas y si no existe, ocupará la local.
exports.MONGODB_UDI = MONGODB_UDI;
var PORT = process.env.PORT || 4200;
exports.PORT = PORT;