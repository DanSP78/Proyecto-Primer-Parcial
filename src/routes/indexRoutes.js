import { Router } from "express";
import { createAlumno, deleteAlumno, renderAlumno, renderEditAlumno, statusAluumno, updateAlumno } from "../controller/alumnoController";
import { createAsignatura, deleteAsignatura, renderAsignatura, renderEditAsignatura, statusAsignatura, updateAsignatura } from "../controller/asignaturaController";
import { createProfesor, deleteProfesor, renderEditProfesor, renderProfesor, statusProfesor, updateProfesor } from "../controller/profesorController";
import Alumnos from '../models/Alumnos';
import Asignaturas from '../models/Asignaturas'


const router = Router();


//ruta inicio
router.get("/", async (req, res) => {
  res.render("index", { });
});
//editar
router.get("/update", (req, res) => {
  res.render("editar",);
});


//inicio Alumno
router.get("/alumnoAgregar", renderAlumno);
//Agregar
router.post("/alumnos/agregar",createAlumno);
//Vista de editar
router.get("/actualizarAlumno/:id", renderEditAlumno);
//Actualizar
router.post("/actualizarAlumno/:id", updateAlumno);
//delete
router.get("/eliminarAlumno/:id", deleteAlumno);
//status
router.get("/statusAlumno/:id", statusAluumno);



//Inicio Asignatura
router.get("/materiaAgregar", renderAsignatura);
//Agregar
router.post("/asignaturas/agregar", createAsignatura);
//Vista de editar
router.get("/actualizarAsignatura/:id", renderEditAsignatura);
//Actualizar
router.post("/actualizarAsignatura/:id", updateAsignatura);
//delete
router.get("/eliminarAsignatura/:id", deleteAsignatura);
//status
router.get("/statusAsignatura/:id", statusAsignatura);





//inicio profesor
router.get("/profesorAgregar",renderProfesor);
//Agregar
router.post("/profesor/agregar", createProfesor);
//Vista de editar
router.get("/actualizarProfesor/:id", renderEditProfesor);
//Actualizar
router.post("/actualizarProfesor/:id", updateProfesor);
//delete
router.get("/eliminarProfesor/:id", deleteProfesor);
//status
router.get("/statusProfesor/:id", statusProfesor);

export default router;
