import { RouterState } from 'connected-react-router';
import { LoginState } from 'app/containers/Login/types';
import { DashboardState } from 'app/containers/Dashboard/types';
import { RegisterState } from 'app/containers/Register/types';
import { ActivateState } from 'app/containers/Activate/types';
import { CreateUserState } from 'app/containers/CreateUser/types';
import { UserFileState } from 'app/containers/UserFile/types';
import { HospitalisationDetailsState } from 'app/containers/HospitalisationDetails/types';
import { ExaminationDetailsState } from 'app/containers/ExaminationDetails/types';
import { NewConsultationState } from 'app/containers/NewConsultation/types';
import { NewExaminationState } from 'app/containers/NewExamination/types';
import { NewHospitalisationState } from 'app/containers/NewHospitalisation/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  router?: RouterState;
  login?: LoginState;
  dashboard?: DashboardState;
  register?: RegisterState;
  activate?: ActivateState;
  createUser?: CreateUserState;
  userFile?: UserFileState;
  hospitalisationDetails?: HospitalisationDetailsState;
  examinationDetails?: ExaminationDetailsState;
  newConsultation?: NewConsultationState;
  newExamination?: NewExaminationState;
  newHospitalisation?: NewHospitalisationState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
