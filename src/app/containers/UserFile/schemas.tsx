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
        { value: 'mode_de_vie', label: 'Mode de vie' },
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
    examen_type: {
      type: 'string',
      label: "Type d'examen",
      items: {
        type: 'string',
      },
      options: [
        { label: 'Congenital cataract', value: 1 },
        { label: 'Benign carcinoid', value: 2 },
        { label: 'Subluxation', value: 3 },
        { label: 'Contusion', value: 4 },
        { label: 'Underdosing', value: 5 },
        { label: 'Commodo Vehicula', value: 6 },
      ],
    },
    commentaire: {
      type: 'string',
      uniforms: {
        component: LongTextField,
        rows: 3,
      },
    },
    content: {
      type: 'array',
      label: 'Examens',
      // 'content.$': {
      //   type: Object,
      // },
      // 'content.$.key': {
      //   type: 'string',
      // },
      // 'content.$.value': {
      //   type: 'string',
      // },
      items: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            label: 'Clé',
          },
          value: {
            type: 'string',
            label: 'Valeur',
          },
        },
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
