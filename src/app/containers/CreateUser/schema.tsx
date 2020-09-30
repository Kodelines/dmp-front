import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// import { DateField } from 'uniforms-antd';

dayjs.extend(relativeTime);

const createJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    first_name: { type: 'string', label: 'Prénom(s)' },
    last_name: { type: 'string', label: 'Nom' },
    date_of_birth: {
      type: 'string',
      label: 'Date de naissance',
      // uniforms: { component: DateField },
    },
    place_of_birth: { type: 'string', label: 'Lieu de naissance' },
    sexe: {
      type: 'string',
      label: 'Sexe',
      options: [
        { label: 'Masculin', value: 'H' },
        { label: 'Féminin', value: 'F' },
      ],
    },
    situation_matrimoniale: {
      type: 'string',
      label: 'Situation matrimoniale',
      options: [
        { label: 'Célibataire', value: 'celibataire' },
        { label: 'Marié(e)', value: 'marie' },
        { label: 'Divorcé(e)', value: 'divorce' },
        { label: 'Voeuf(ve)', value: 'voeuf' },
      ],
    },
    phone_number: { type: 'string', label: 'Numéro de téléphone' },
    type_document: {
      type: 'string',
      label: 'Type de pièce',
      options: [
        { label: 'Passeport', value: 'passeport' },
        { label: 'Permis de Conduire', value: 'permis' },
        { label: "Carte Nationale d'Identité", value: 'identite' },
        { label: 'Carte consulaire', value: 'consulaire' },
        { label: "Carte d'étudiant", value: 'etudiant' },
      ],
    },
    identity_number: { type: 'string', label: 'Numéro de la pièce' },
    address: { type: 'string', label: 'Adresse complète' },
    second_address: { type: 'string', label: 'Autre adresse' },
    contacts_lien: { type: 'string', label: 'Lien avec le patient' },
    contacts_noms: { type: 'string', label: 'Nom et Prénoms' },
    contacts_phone: { type: 'string', label: 'Numéro de téléphone' },
    contacts_adresse: { type: 'string', label: 'Adresse complète' },
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
