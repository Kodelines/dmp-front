/**
 *
 * FilePickerField
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Typography, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { connectField, HTMLFieldProps } from 'uniforms';

const { Dragger } = Upload;

type ImageProps = HTMLFieldProps<
  string,
  HTMLDivElement,
  { extra; help; defaultImage; multiple? }
>;

const FilePickerField = connectField(
  memo(
    ({
      value,
      onChange,
      label,
      extra,
      help,
      multiple,
      ...props
    }: ImageProps) => {
      return (
        <Dragger
          multiple={multiple}
          listType="picture"
          action="https://next.json-generator.com/api/json/get/NylupQXUY"
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.png,.tiff,.jpg,.jpeg,.bmp"
        >
          <StyledIcon>
            <InboxOutlined size={54} />
          </StyledIcon>
          <p>Cliquez pour sélectionner ou glissez un ou plusieurs fichier(s)</p>
          <Typography.Paragraph type="secondary">
            Seuls les fichiers PDF, Word ou images sont acceptés
          </Typography.Paragraph>
        </Dragger>
      );
    },
  ),
);

export default FilePickerField;

const StyledIcon = styled.div`
  font-size: 44px;
`;
