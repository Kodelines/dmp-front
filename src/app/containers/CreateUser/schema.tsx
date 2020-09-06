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
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    address: { type: 'string' },
    phone_number: { type: 'string' },
    identity_number: { type: 'string' },
    type_document: { type: 'string' },
    sexe: { type: 'string' },
    situation_matrimoniale: { type: 'string' },
  },
};

const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema: object) {
  const validator = ajv.compile(createJsonSchema);

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
