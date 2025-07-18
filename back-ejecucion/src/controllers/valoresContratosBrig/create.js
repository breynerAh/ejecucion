import ValoresContratosBrig from "../../models/valoresContratosBrig/index.js";

const createValoresContratosBrig = async (req, res) => {
	const { codigo, tipoBrigada, tipoDia, valor } = req.body;

	try {
		const valorContrato = await ValoresContratosBrig.create({
			codigo,
			tipoBrigada,
			tipoDia,
			valor
		});
		res.status(201).json(valorContrato);
	} catch (error) {
		console.log(error, 89)
		return res.status(500).json({
			message: "Error interno del servidor al crear el registro.",
			error: error.message
		});
	}
};

export default createValoresContratosBrig
