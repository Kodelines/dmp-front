import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const createJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    first_name: { type: 'string', label: 'Prénom' },
    last_name: { type: 'string', label: 'Nom' },
    address: { type: 'string', label: 'Adresse' },
    phone_number: { type: 'string', label: 'Téléphone' },
    identity_number: { type: 'string', label: "N° d'identité" },
    type_document: { type: 'string', label: 'Type de document' },
    sexe: { type: 'string', label: 'Sexe' },
    situation_matrimoniale: { type: 'string', label: 'Situation matrimoniale' },
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

const schemaValidator = createValidator(createJsonSchema);

export const userSchema = new JSONSchemaBridge(
  createJsonSchema,
  schemaValidator,
);
