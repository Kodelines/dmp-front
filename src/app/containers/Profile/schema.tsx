import Ajv from 'ajv';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';

const jsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    firstName: {
      type: 'string',
      label: 'Prénom(s)',
    },
    lastName: {
      type: 'string',
      label: 'Nom(s)',
    },
    speciality: {
      type: 'string',
      label: 'Spécialité',
    },
    phone: {
      type: 'string',
      label: 'Téléphone',
    },
    password: {
      type: 'string',
      label: 'Mot de passe',
      uniforms: { type: 'password' },
    },
  },
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

export default new JSONSchemaBridge(jsonSchema, createValidator(jsonSchema));
