import { Outlet } from 'react-router-dom';
import Directory from '../../components/Directory/Directory';

const Home = () => (
  <>
    <Directory />
    <Outlet />
  </>
);

export default Home;
