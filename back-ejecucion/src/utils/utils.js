export function validateInput(input, schema) {
	const errors = [];

	schema.map((element) => {
		const { fieldName, type, required } = element;

		if (required && input[fieldName] === undefined) {
			errors.push(`El campo ${fieldName} es requerido.`);
			return;
		}

		if (
			type !== typeof input[fieldName] &&
			required &&
			input[fieldName] !== undefined
		) {
			errors.push(`El campo ${fieldName} debe ser de tipo ${type}.`);
			return;
		}
	});

	return errors.length > 0 ? errors : null;
}
