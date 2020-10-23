import { Descriptions, Space } from 'antd';
import React from 'react';

export const Informations = () => {
  return (
    <div>
      <Space direction="vertical" size="large" className="d-block">
        <Descriptions bordered size="default" column={{ md: 1, xs: 1 }}>
          <Descriptions.Item label="Nom et prénom(s)">
            Moussa Diop
          </Descriptions.Item>
          <Descriptions.Item label="Addresse">
            20 Avenue du Général de Gaulle 95100
          </Descriptions.Item>
          <Descriptions.Item label="Téléphone">0605919114</Descriptions.Item>
          <Descriptions.Item label="N° d'identité">PPKKO02</Descriptions.Item>
          <Descriptions.Item label="Type de document">
            Passeport
          </Descriptions.Item>
          <Descriptions.Item label="Sexe">Masculin</Descriptions.Item>
          <Descriptions.Item label="Situation matrimoniale">
            Célibataire
          </Descriptions.Item>
        </Descriptions>

        <h3>Personne à contacter en cas d'urgence</h3>

        <Descriptions bordered size="default" column={{ md: 2, xs: 1 }}>
          <Descriptions.Item label="Nom et prénom(s)">
            Aissa Diop
          </Descriptions.Item>
          <Descriptions.Item label="Téléphone">0605919114</Descriptions.Item>
          <Descriptions.Item label="Lien">Epouse</Descriptions.Item>
        </Descriptions>
      </Space>
    </div>
  );
};

export const ShortUserInformations = () => {
  return (
    <div>
      <Space direction="vertical" size="large" className="d-block">
        <Descriptions bordered size="default" column={{ md: 1, xs: 1 }}>
          <Descriptions.Item label="Nom et prénom(s)">
            Moussa Diop
          </Descriptions.Item>
          <Descriptions.Item label="Addresse">
            20 Avenue du Général de Gaulle 95100
          </Descriptions.Item>
          <Descriptions.Item label="Téléphone">0605919114</Descriptions.Item>
        </Descriptions>
      </Space>
    </div>
  );
};
