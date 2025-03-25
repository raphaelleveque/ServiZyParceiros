export type AuthStackParamList = {
  Onboarding: { onFinish: () => void };
  Login: undefined;
  Register: undefined;
  ConfirmIdentity: undefined;
  ForgotPassword: undefined;
  TwoFactorAuth: { source: string };
  EnterNewPassword: undefined;
  Main: undefined;
};
