"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _alumnoController = require("../controller/alumnoController");
var _asignaturaController = require("../controller/asignaturaController");
var _profesorController = require("../controller/profesorController");
var _Alumnos = _interopRequireDefault(require("../models/Alumnos"));
var _Asignaturas = _interopRequireDefault(require("../models/Asignaturas"));
var router = (0, _express.Router)();

//ruta inicio
router.get("/", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.render("index", {});
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
//editar
router.get("/update", function (req, res) {
  res.render("editar");
});

//inicio Alumno
router.get("/alumnoAgregar", _alumnoController.renderAlumno);
//Agregar
router.post("/alumnos/agregar", _alumnoController.createAlumno);
//Vista de editar
router.get("/actualizarAlumno/:id", _alumnoController.renderEditAlumno);
//Actualizar
router.post("/actualizarAlumno/:id", _alumnoController.updateAlumno);
//delete
router.get("/eliminarAlumno/:id", _alumnoController.deleteAlumno);
//status
router.get("/statusAlumno/:id", _alumnoController.statusAluumno);

//Inicio Asignatura
router.get("/materiaAgregar", _asignaturaController.renderAsignatura);
//Agregar
router.post("/asignaturas/agregar", _asignaturaController.createAsignatura);
//Vista de editar
router.get("/actualizarAsignatura/:id", _asignaturaController.renderEditAsignatura);
//Actualizar
router.post("/actualizarAsignatura/:id", _asignaturaController.updateAsignatura);
//delete
router.get("/eliminarAsignatura/:id", _asignaturaController.deleteAsignatura);
//status
router.get("/statusAsignatura/:id", _asignaturaController.statusAsignatura);

//inicio profesor
router.get("/profesorAgregar", _profesorController.renderProfesor);
//Agregar
router.post("/profesor/agregar", _profesorController.createProfesor);
//Vista de editar
router.get("/actualizarProfesor/:id", _profesorController.renderEditProfesor);
//Actualizar
router.post("/actualizarProfesor/:id", _profesorController.updateProfesor);
//delete
router.get("/eliminarProfesor/:id", _profesorController.deleteProfesor);
//status
router.get("/statusProfesor/:id", _profesorController.statusProfesor);
var _default = router;
exports["default"] = _default;