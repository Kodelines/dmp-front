import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';
import { LongTextField } from 'uniforms-antd';

const consultationJsonSchema = {
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
        { label: 'Examen général', value: 'general' },
        { label: 'Examen neurologique', value: 'neurologie' },
        { label: "Examen de l'appareil digestif", value: 'digestion' },
        { label: "Examen de l'appareil dermatologique", value: 'dermatologie' },
        { label: 'Examen des aires ganglionnaires', value: 'ganglionnaires' },
        {
          label: "Examen de l'appareil urinaire ou urologique",
          value: 'urologie',
        },
        { label: 'Examen ORL', value: 'orl' },
        { label: 'Examen stomatologique', value: 'stomatologie' },
        { label: 'Examen gynécologique', value: 'gynécologie' },
        { label: 'Examen cardio-vasculaire', value: 'cardio' },
        {
          label: 'Examen respiratoire ou pleuro-pulmonaire',
          value: 'pulmonaire',
        },
      ],
      uniforms: {
        showSearch: true,
      },
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
      // label: 'Examens',
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

export default new JSONSchemaBridge(
  consultationJsonSchema,
  createValidator(consultationJsonSchema),
);
