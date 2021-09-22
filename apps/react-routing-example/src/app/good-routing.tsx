import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { AppRoutes } from './routing';
import useMyHistory from './routing/useMyHistory';

export const HomePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/tasks');
  };

  return (
    <div>
      <Link to={'/register'}>Register</Link>

      <Link to={'/home'}>Home</Link>

      <Link to={'/forgot-password'}>Forgot password</Link>

      <button onClick={handleClick}>Click me </button>
    </div>
  );
};

export const LoginPage = () => {
  const history = useMyHistory();

  const handleClick = () => {
    history.push(AppRoutes.TASKS);
  };

  const handleTaskDetail = () => {
    history.push(AppRoutes.TASKS, { id: 2 });
  };

  return (
    <div>
      <Link to={AppRoutes.REGISTER}>Register</Link>

      <Link to={AppRoutes.HOME}>Home</Link>

      <Link to={AppRoutes.FORGOT_PASSWORD}>Forgot password</Link>

      <button onClick={handleClick}>Click me </button>

      <button onClick={handleTaskDetail}>Task Detail</button>
    </div>
  );
};

export const TasksPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/tasks');
  };

  return (
    <div>
      <Link to={'/register'}>Register</Link>

      <Link to={'/home'}>Home</Link>

      <Link to={'/forgot-password'}>Forgot password</Link>

      <button onClick={handleClick}>Click me </button>
    </div>
  );
};

export const TaskDetailPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/tasks');
  };

  return (
    <div>
      <Link to={'/register'}>Register</Link>

      <Link to={'/home'}>Home</Link>

      <Link to={'/forgot-password'}>Forgot password</Link>

      <button onClick={handleClick}>Click me </button>
    </div>
  );
};

export const RegisterPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/tasks');
  };

  return (
    <div>
      <Link to={'/register'}>Register</Link>

      <Link to={'/home'}>Home</Link>

      <Link to={'/forgot-password'}>Forgot password</Link>

      <button onClick={handleClick}>Click me </button>
    </div>
  );
};

export const ForgotPasswordPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/tasks');
  };

  return (
    <div>
      <Link to={'/register'}>Register</Link>

      <Link to={'/home'}>Home</Link>

      <Link to={'/forgot-password'}>Forgot password</Link>

      <button onClick={handleClick}>Click me </button>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <Route exact path={AppRoutes.HOME} component={HomePage} />
      <Route exact path={AppRoutes.LOGIN} component={LoginPage} />
      <Route exact path={AppRoutes.REGISTER} component={RegisterPage} />
      <Route
        exact
        path={AppRoutes.FORGOT_PASSWORD}
        component={ForgotPasswordPage}
      />
      <Route exact path={AppRoutes.TASKS} component={TasksPage} />
      <Route exact path={AppRoutes.TASK_DETAIL} component={TaskDetailPage} />
    </div>
  );
};

export default Example;
