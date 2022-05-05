import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './Navigation.scss';

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
