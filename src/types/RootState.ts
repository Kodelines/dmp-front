import { RouterState } from 'connected-react-router';
import { LoginState } from 'app/containers/Login/types';
import { DashboardState } from 'app/containers/Dashboard/types';
import { RegisterState } from 'app/containers/Register/types';
import { ActivateState } from 'app/containers/Activate/types';
import { CreateUserState } from 'app/containers/CreateUser/types';
import { UserFileState } from 'app/containers/UserFile/types';
import { HospitalisationDetailsState } from 'app/containers/HospitalisationDetails/types';
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
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
