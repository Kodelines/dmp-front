import Ajv from 'ajv';
import { LongTextField } from 'uniforms-antd';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';

const consultationJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    motif_consultation: {
      type: 'string',
    },
    histoire_maladie: {
      type: 'string',
      uniforms: { component: LongTextField, rows: 3 },
    },
    diagnostic: {
      type: 'string',
      label: 'Diagnostic',
      uniforms: { component: LongTextField, rows: 3 },
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

export default new JSONSchemaBridge(
  consultationJsonSchema,
  createValidator(consultationJsonSchema),
);
