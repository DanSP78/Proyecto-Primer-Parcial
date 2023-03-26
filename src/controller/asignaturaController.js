import Asignaturas from "../models/Asignaturas";



export const renderAsignatura = async (req, res) => {
    const asignaturas = await Asignaturas.find().lean();
    //console.log(asignaturas);//envia los documentos a consola
    res.render("agregarMateria", { asignaturas: asignaturas });
  };

  export const createAsignatura = async (req, res) => {
    const asignaturas = Asignaturas(req.body);
    await asignaturas.save();
    console.log(asignaturas);
    res.redirect("/materiaAgregar");
  };
 


  export const renderEditAsignatura = async (req, res) => {
    try {
      const asignaturas = await Asignaturas.findById(req.params.id).lean();
      res.render("editarAsignatura", { asignaturas });
    } catch (error) {
      console.log(error.message);
    }
  };
  


  export const updateAsignatura = async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndUpdate(id, req.body);
    res.redirect("/materiaAgregar");
  };
 


  export const  deleteAsignatura = async (req, res) => {
    const { id } = req.params;
    await Asignaturas.findByIdAndDelete(id);
    res.redirect("/materiaAgregar");
  };

  export const statusAsignatura = async (req, res) => {
    const { id } = req.params;
    const asignaturas = await Asignaturas.findById(id);
    asignaturas.opcion = !asignaturas.opcion;
    await asignaturas.save();
    res.redirect("/materiaAgregar");
  };