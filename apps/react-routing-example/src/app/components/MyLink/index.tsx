import { Link, LinkProps } from 'react-router-dom';
import useMyHistory from '../../routing/useMyHistory';

export type Props = LinkProps & {
  to: string;
  params?: Record<string, string | number>;
};

const MyLink = (props: Props) => {
  const { generateLink } = useMyHistory();
  const { to, params, ...linkProps } = props;

  return <Link {...linkProps} to={generateLink(to, params)} />;
};

export default MyLink;
