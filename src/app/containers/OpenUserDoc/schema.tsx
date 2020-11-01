import Ajv from 'ajv';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';

// import { DateField } from 'uniforms-antd';

dayjs.extend(relativeTime);

const createJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    attending_doctor: {
      type: 'string',
      label: 'Médecin traitant',
      options: [
        { label: 'Isahella MacNeilage', value: '1234' },
        { label: 'Annmarie Albrooke', value: '12345' },
        { label: 'Danya Denisevich', value: '123456' },
        { label: 'Hadley Delea', value: '1234567' },
        { label: 'Murdock Cammish', value: '12345678' },
      ],
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

const schemaValidator = createValidator(createJsonSchema);

export const openUserDocSchema = new JSONSchemaBridge(
  createJsonSchema,
  schemaValidator,
);
