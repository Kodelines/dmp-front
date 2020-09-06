import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const historyJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    type: {
      type: 'string',
      label: "Type d'antécédent",
      options: [
        { label: 'familly', value: 'Antécédent familial' },
        { label: 'surgical', value: 'Antécédent chirurgical' },
        { label: 'medical', value: 'Antécédent medical' },
        { label: 'lifestyle', value: 'Mode de vie' },
      ],
    },
    description: { type: 'string' },
  },
};

const consultationJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    motif_consultation: { type: 'string' },
    histoire_maladie: { type: 'string' },
    commentaire: { type: 'string' },
  },
};

const hospitalizationJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    motif_hospitalisation: { type: 'string' },
    histoire_maladie: { type: 'string' },
    commentaire: { type: 'string' },
  },
};

const examenJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    examen_type: { type: 'string' },
    commentaire: { type: 'string' },
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

export const historySchema = new JSONSchemaBridge(
  historyJsonSchema,
  createValidator(historyJsonSchema),
);

export const consultationSchema = new JSONSchemaBridge(
  consultationJsonSchema,
  createValidator(consultationJsonSchema),
);

export const hospitalizationSchema = new JSONSchemaBridge(
  hospitalizationJsonSchema,
  createValidator(hospitalizationJsonSchema),
);

export const examenSchema = new JSONSchemaBridge(
  examenJsonSchema,
  createValidator(examenJsonSchema),
);
