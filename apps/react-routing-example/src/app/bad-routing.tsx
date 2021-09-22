import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

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
