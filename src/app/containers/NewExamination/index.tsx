/**
 *
 * NewExamination
 *
 */

import { Col, Descriptions, Divider, PageHeader, Row } from 'antd';
import { Container } from 'app/components/Container';
import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { AutoFields, AutoForm, SubmitField } from 'uniforms-antd';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { newExaminationSaga } from './saga';
import schema from './schema';
import { selectNewExamination } from './selectors';
import { reducer, sliceKey } from './slice';

interface Props {}

export const NewExamination = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: newExaminationSaga });

  const [formState, setFormState] = useState({});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newExamination = useSelector(selectNewExamination);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const onChange = (key: string, value) => {
    setFormState({ ...formState, [key]: value });
    console.log('formState : ', formState);
  };

  var typeIsSetted = formState['examen_type'];

  return (
    <>
      <Helmet>
        <title>NewExamination</title>
        <meta name="description" content="Description of NewExamination" />
      </Helmet>
      <Container>
        <PageHeader
          onBack={() => window.history.back()}
          title="Moussa Diop"
          subTitle="Nouvel examen"
        >
          <Descriptions bordered column={{ xs: 1, md: 2 }}>
            <Descriptions.Item label="Etablissement">
              Clinique Dupont - Dumas
            </Descriptions.Item>
            <Descriptions.Item label="Médécin">
              Mathéo Renaud III
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <Divider />
        <h2>Nouvel examen</h2>
        <AutoForm schema={schema} model={formState} onChange={onChange}>
          {/* -------- Basique ------- */}
          <Row>
            <Col span={24}>
              <AutoFields fields={['examen_type', 'commentaire']} />
            </Col>
          </Row>
          {typeIsSetted && <Divider />}
          {/* ---- Examen général ---- */}
          {formState['examen_type'] && formState['examen_type'] === 'general' && (
            <>
              <h2>Détails de l'examen général</h2>
              <Row gutter={16}>
                <Col span={12}>
                  <AutoFields fields={['etat_general', 'oedeme_membres']} />
                </Col>
                <Col span={12}>
                  <AutoFields fields={['muqueuse', 'auscultation']} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <AutoFields fields={['poids']} />
                </Col>
                <Col span={8}>
                  <AutoFields fields={['taille']} />
                </Col>
                <Col span={8}>
                  <AutoFields fields={['imc']} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <AutoFields
                    fields={[
                      'pli_deshydratation',
                      'general_autres',
                      'temperature',
                      'frequence_respiratoire',
                      'dextro',
                    ]}
                  />
                </Col>
                <Col span={12}>
                  <AutoFields
                    fields={[
                      'pli_denutrition',
                      'constantes',
                      'pouls',
                      'tension_arterielle',
                      'bandellettes_urinaire',
                    ]}
                  />
                </Col>
              </Row>
            </>
          )}
          {/* Examen cardio vasculaire */}
          {formState['examen_type'] && formState['examen_type'] === 'cardio' && (
            <>
              <h2>Détails de l'examen cardio-vasculaire</h2>
              <h3>a) Cardio</h3>
              <Row gutter={16}>
                <Col span={12}>
                  <AutoFields
                    fields={['cardio_inspection', 'cardio_auscultation']}
                  />
                </Col>
                <Col span={12}>
                  <AutoFields fields={['cardio_palpation']} />
                </Col>
              </Row>
              <h3>b) Vasculaire</h3>
              <Row gutter={16}>
                <Col span={12}>
                  <AutoFields fields={['vasculaire_palpation']} />
                </Col>
              </Row>
            </>
          )}
          {/* Examen respiratoire ou pleuro - pulmonaire */}
          {formState['examen_type'] &&
            formState['examen_type'] === 'respiratoire' && (
              <>
                <h2>Détails de l'examen respiratoire ou pleuro - pulmonaire</h2>
                <Row gutter={16}>
                  <Col span={12}>
                    <AutoFields fields={['inspection', 'percution']} />
                  </Col>
                  <Col span={12}>
                    <AutoFields
                      fields={['palpation', 'respiratoire_auscultation']}
                    />
                  </Col>
                </Row>
              </>
            )}
          {/* Examen neurologique */}
          {formState['examen_type'] &&
            formState['examen_type'] === 'neurologie' && (
              <>
                <h2>Détails de l'examen neurologique</h2>
                <Row gutter={16}>
                  <Col span={12}>
                    <AutoFields
                      fields={[
                        'fonction_superieur',
                        'tonicite',
                        'sensibilite',
                        'coordination',
                      ]}
                    />
                  </Col>
                  <Col span={12}>
                    <AutoFields
                      fields={[
                        'motricite',
                        'reflexe',
                        'troplicite',
                        'nerfs_craniens',
                      ]}
                    />
                  </Col>
                </Row>
              </>
            )}
          {/* Examen de l'appareil digestif  */}
          {formState['examen_type'] &&
            formState['examen_type'] === 'digestion' && (
              <>
                <h2>Détails de l'examen de l'appareil digestif</h2>
                <Row gutter={16}>
                  <Col span={12}>
                    <AutoFields
                      fields={[
                        'inspection_abdomen',
                        'palpation_defense',
                        'palpation_fosse',
                        'percussion',
                      ]}
                    />
                  </Col>
                  <Col span={12}>
                    <AutoFields
                      fields={[
                        'palpation_masse',
                        'palpation_hernie',
                        'palpation_tr',
                        'digestif_auscultation',
                      ]}
                    />
                  </Col>
                </Row>
              </>
            )}
          {/* Examen dermatologique */}
          {formState['examen_type'] &&
            formState['examen_type'] === 'dermatologie' && (
              <>
                <h2>Détails de l'examen dermatologique</h2>
                <Row gutter={16}>
                  <Col span={24}>
                    <AutoFields fields={['dermatologique']} />
                  </Col>
                </Row>
              </>
            )}
          {/* Examen des aires ganglionnaires */}
          {formState['examen_type'] &&
            formState['examen_type'] === 'ganglionnaires' && (
              <>
                <h2>Détails de l'examen des aires ganglionnaires</h2>
                <Row gutter={16}>
                  <Col span={24}>
                    <AutoFields fields={['ganglionnaire']} />
                  </Col>
                </Row>
              </>
            )}
          {/* Examen de l'appareil urinaire ou urologique */}
          {formState['examen_type'] && formState['examen_type'] === 'urologie' && (
            <>
              <h2>Détails de l'examen de l'appareil urinaire ou urologique</h2>
              <Row gutter={16}>
                <Col span={12}>
                  <AutoFields
                    fields={[
                      'urologie_mechen',
                      'urologie_palpation',
                      'urologie_tr',
                    ]}
                  />
                </Col>
                <Col span={12}>
                  <AutoFields
                    fields={['urologie_points', 'urologie_organes']}
                  />
                </Col>
              </Row>
            </>
          )}
          {/* Examen ORL */}
          {formState['examen_type'] && formState['examen_type'] === 'orl' && (
            <>
              <h2>Détails de l'examen ORL</h2>
              <Row gutter={16}>
                <Col span={24}>
                  <AutoFields fields={['orl']} />
                </Col>
              </Row>
            </>
          )}
          {/* Examen stomatologique */}
          {formState['examen_type'] &&
            formState['examen_type'] === 'stomatologie' && (
              <>
                <h2>Détails de l'examen stomatologique</h2>
                <Row gutter={16}>
                  <Col span={24}>
                    <AutoFields fields={['stomatologique']} />
                  </Col>
                </Row>
              </>
            )}
          {/* Examen gynecologique */}
          {formState['examen_type'] &&
            formState['examen_type'] === 'gynecologie' && (
              <>
                <h2>Détails de l'examen gynécologique</h2>
                <Row gutter={16}>
                  <Col span={12}>
                    <AutoFields
                      fields={[
                        'gyneco_hauteur',
                        'gyneco_mammaire',
                        'gyneco_specelum',
                      ]}
                    />
                  </Col>
                  <Col span={12}>
                    <AutoFields fields={['gyneco_bruits', 'gyneco_vaginal']} />
                  </Col>
                </Row>
              </>
            )}
          <Divider />
          <Row justify="end">
            <Col span={5}>
              <SubmitField block value="Enregistrer" />
            </Col>
          </Row>
        </AutoForm>
      </Container>
    </>
  );
});

// const Div = styled.div``;
