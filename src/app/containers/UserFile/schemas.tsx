import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { LongTextField } from 'uniforms-antd';

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
        { value: 'familly', label: 'Antécédent familial' },
        { value: 'surgical', label: 'Antécédent chirurgical' },
        { value: 'medical', label: 'Antécédent medical' },
        { value: 'lifestyle', label: 'Mode de vie' },
      ],
    },
    description: {
      type: 'string',
      label: 'Description',
      uniforms: {
        component: LongTextField,
        rows: 3,
      },
    },
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

const examinationJsonSchema = {
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

export const examinationSchema = new JSONSchemaBridge(
  examinationJsonSchema,
  createValidator(examinationJsonSchema),
);
