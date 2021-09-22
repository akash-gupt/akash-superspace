import { AppRoutes } from './AppRoutes';
import useMyHistory from './useMyHistory';

export const useAppRoutes = () => {
  const history = useMyHistory();

  const goToHome = () => {
    history.push(AppRoutes.HOME);
  };

  const goToLogin = () => {
    history.push(AppRoutes.LOGIN);
  };

  const goToSignUp = () => {
    history.push(AppRoutes.SIGN_UP);
  };

  const goToForgotPassword = () => {
    history.push(AppRoutes.FORGOT_PASSWORD);
  };

  const goToResetPassword = () => {
    history.push(AppRoutes.RESET_PASSWORD);
  };

  const goToTasks = () => {
    history.push(AppRoutes.TASKS);
  };

  const goToTaskDetail = () => {
    history.push(AppRoutes.TASK_DETAIL);
  };

  return {
    goToHome,
    goToLogin,
    goToForgotPassword,
    goToResetPassword,
    goToSignUp,
    goToTasks,
    goToTaskDetail,
  };
};
