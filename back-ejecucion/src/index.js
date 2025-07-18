import express from "express";
import cors from "cors";
import sequelize from "./config/db.js"
import dotenv from "dotenv";
import valoresContratosBrig from "./routes/valoresContratosBrig/index.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!')
})
app.use('/api/v1', valoresContratosBrig);

const PORT = process.env.PORT || 5006;

sequelize.authenticate()
	.then(() => {
		console.log('Conexión a la base de datos exitosa.');
		app.listen(PORT, () => {
			console.log(`Servidor corriendo en http://localhost:${PORT}`);
		});
	})
	.catch(err => {
		console.error('No se pudo conectar a la base de datos:', err);
	});

sequelize.sync()
