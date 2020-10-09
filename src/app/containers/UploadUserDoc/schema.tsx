import Ajv from 'ajv';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';
import FilePickerField from 'app/components/FilePickerField';

// import { DateField } from 'uniforms-antd';

dayjs.extend(relativeTime);

const createJsonSchema = {
  title: 'Block',
  type: 'object',
  size: 'large',
  properties: {
    attachments: {
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

const schemaValidator = createValidator(createJsonSchema);

export const uploadDocSchema = new JSONSchemaBridge(
  createJsonSchema,
  schemaValidator,
);
