import Alumnos from "../models/Alumnos";


export const renderAlumno = async (req, res) => {
    const alumnos = await Alumnos.find().lean();
    //console.log(asignaturas);//envia los documentos a consola
    res.render("agregarAlumno", { alumnos: alumnos });
  };

  export const createAlumno = async (req, res) => {
    const alumnos = Alumnos(req.body);
    await alumnos.save();
    console.log(alumnos);
    res.redirect("/alumnoAgregar");
  };
 


  export const renderEditAlumno = async (req, res) => {
    try {
      const alumnos = await Alumnos.findById(req.params.id).lean();
      res.render("editarAlumno", { alumnos });
    } catch (error) {
      console.log(error.message);
    }
  };
  


  export const updateAlumno = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);
    res.redirect("/alumnoAgregar");
  };
 


  export const  deleteAlumno = async (req, res) => {
    const { id } = req.params;
    await Alumnos.findByIdAndDelete(id);
    res.redirect("/alumnoAgregar");
  };
 

  export const statusAluumno = async (req, res) => {
    const { id } = req.params;
    const alumnos = await Alumnos.findById(id);
    alumnos.opcion = !alumnos.opcion;
    await alumnos.save();
    res.redirect("/alumnoAgregar");
  };
 

