import Ajv from 'ajv';
import FilePickerField from 'app/components/FilePickerField';
import { LongTextField } from 'uniforms-antd';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';

const jsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    motif_hospitalisation: {
      type: 'string',
      uniforms: { component: LongTextField, rows: 3 },
    },
    histoire_maladie: {
      type: 'string',
      uniforms: { component: LongTextField, rows: 3 },
    },
    commentaire: {
      type: 'string',
      uniforms: { component: LongTextField, rows: 3 },
    },
    attachments: {
      label: 'Fichiers joint(s)',
      type: 'string',
      uniforms: {
        component: FilePickerField,
        rows: 3,
        multiple: true,
      },
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
