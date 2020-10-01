import Ajv from 'ajv';
import { LongTextField } from 'uniforms-antd';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';

const consultationJsonSchema = {
  type: 'object',
  properties: {
    // -------- Basique ------- //
    examen_type: {
      type: 'string',
      label: "Type d'examen",
      items: {
        type: 'string',
      },
      options: [
        { label: 'Examen général', value: 'general' },
        { label: 'Examen cardio-vasculaire', value: 'cardio' },
        {
          label: 'Examen respiratoire ou pleuro - pulmonaire',
          value: 'respiratoire',
        },
        { label: 'Examen neurologique', value: 'neurologie' },
        { label: "Examen de l'appareil digestif", value: 'digestion' },
        { label: 'Examen dermatologique', value: 'dermatologie' },
        { label: 'Examen des aires ganglionnaires', value: 'ganglionnaires' },
        {
          label: "Examen de l'appareil urinaire ou urologique",
          value: 'urologie',
        },
        { label: 'Examen ORL', value: 'orl' },
        { label: 'Examen stomatologique', value: 'stomatologie' },
        { label: 'Examen gynécologique', value: 'gynecologie' },
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
    // ---- Examen général ---- //
    etat_general: {
      type: 'string',
      label: 'Etat général',
    },
    muqueuse: {
      type: 'string',
    },
    oedeme_membres: {
      type: 'string',
      label: 'Oedème des membres inférieurs',
    },
    auscultation: {
      type: 'string',
    },
    poids: {
      type: 'string',
    },
    taille: {
      type: 'string',
    },
    imc: {
      type: 'string',
      label: 'IMC',
    },
    pli_deshydratation: {
      type: 'string',
      label: 'Pli de déshydratation',
    },
    pli_denutrition: {
      type: 'string',
      label: 'Pli de dénutrition',
    },
    general_autres: {
      type: 'string',
      label: 'Autres',
    },
    constantes: {
      type: 'string',
    },
    temperature: {
      type: 'string',
    },
    pouls: {
      type: 'string',
    },
    frequence_respiratoire: {
      type: 'string',
    },
    tension_arterielle: {
      type: 'string',
    },
    dextro: {
      type: 'string',
    },
    bandellettes_urinaire: {
      type: 'string',
    },
    //  Examen cardio vasculaire  //
    // cardio
    cardio_inspection: {
      type: 'string',
      label: 'Inspection',
    },
    cardio_palpation: {
      type: 'string',
      label: 'Palpation',
    },
    cardio_auscultation: {
      type: 'string',
      label: 'Auscultation',
    },
    // vasculaire
    vasculaire_palpation: {
      type: 'string',
      label: 'Palpation',
    },
    // Examen respiratoire ou pleuro - pulmonaire //
    inspection: {
      type: 'string',
    },
    palpation: {
      type: 'string',
    },
    percution: {
      type: 'string',
    },
    respiratoire_auscultation: {
      type: 'string',
    },
    // Examen neurologique //
    fonction_superieur: {
      type: 'string',
    },
    motricite: {
      type: 'string',
      label: 'Motricité',
    },
    tonicite: {
      type: 'string',
      label: 'Tonicité',
    },
    reflexe: {
      type: 'string',
      label: 'Reflexes',
    },
    sensibilite: {
      type: 'string',
      label: 'Sensibilité',
    },
    troplicite: {
      type: 'string',
      label: 'Troplicité',
    },
    coordination: {
      type: 'string',
      label: 'Coordination',
    },
    nerfs_craniens: {
      type: 'string',
      label: 'Nerfs craniens',
    },
    //  Examen de l'appareil digestif  //
    inspection_abdomen: {
      type: 'string',
    },
    palpation_masse: {
      type: 'string',
      label: 'Masse',
    },
    palpation_defense: {
      type: 'string',
      label: 'Défense',
    },
    palpation_hernie: {
      type: 'string',
      label: 'Hernie abdominale',
    },
    palpation_fosse: {
      type: 'string',
      label: 'Fosse lombaire',
    },
    palpation_tr: {
      type: 'string',
      label: 'T.R',
    },
    percussion: {
      type: 'string',
    },
    digestif_auscultation: {
      type: 'string',
    },
    // Examen dermatologique //
    dermatologique: {
      type: 'string',
      label: 'Examen dermatologique',
      uniforms: {
        component: LongTextField,
        rows: 3,
      },
    },
    // Examen des aires ganglionnaires //
    ganglionnaire: {
      type: 'string',
      label: 'Examen des aires ganglionnaires',
      uniforms: {
        component: LongTextField,
        rows: 3,
      },
    },
    // Examen de l'appareil urinaire ou urologique //
    urologie_mechen: {
      type: 'string',
      label: 'Méchen',
    },
    urologie_points: {
      type: 'string',
      label: 'Points uréteraux',
    },
    urologie_palpation: {
      type: 'string',
      label: 'Palpation',
    },
    urologie_organes: {
      type: 'string',
      label: 'Organes génitaux externes',
    },
    urologie_tr: {
      type: 'string',
      label: 'T.R',
    },
    // Examen ORL
    orl: {
      type: 'string',
      label: 'Examen ORL',
      uniforms: {
        component: LongTextField,
      },
    },
    // Examen stomatologique
    stomatologique: {
      type: 'string',
      label: 'Examen stomatologique',
      uniforms: {
        component: LongTextField,
        rows: 3,
      },
    },
    // Examen gynecologique
    gyneco_hauteur: {
      type: 'string',
      label: 'Hauteur uterine',
    },
    gyneco_bruits: {
      type: 'string',
      label: 'Bruits du coeur foétale',
    },
    gyneco_mammaire: {
      type: 'string',
      label: 'Exmamen mammaire',
    },
    gyneco_vaginal: {
      type: 'string',
      label: 'Bruits',
    },
    gyneco_specelum: {
      type: 'string',
      label: 'Examen au speculum',
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
