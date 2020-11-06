/* --- STATE --- */
export interface LoginState {
  loading: boolean;
  status?: 'error' | 'success';
  error?: string;
}

export type ContainerState = LoginState;
