import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

export const HomePage = () => {
  return <Link to={'/home'} />;
};

export const LoginPage = () => {
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

export const TasksPage = () => {
  return <Link to={'/home'} />;
};

export const TaskDetailPage = () => {
  return <Link to={'/home'} />;
};

export const RegisterPage = () => {
  return <Link to={'/home'} />;
};

export const ForgotPasswordPage = () => {
  return <Link to={'/home'} />;
};

const Example = () => {
  return (
    <div>
      <Route exact path={'/home'} component={HomePage} />
      <Route exact path={'/login'} component={LoginPage} />
      <Route exact path={'/register'} component={RegisterPage} />
      <Route exact path={'/forgot-password'} component={ForgotPasswordPage} />
      <Route exact path={'/tasks'} component={TasksPage} />
      <Route exact path={'/tasks/:taskId'} component={TaskDetailPage} />
    </div>
  );
};

export default Example;
