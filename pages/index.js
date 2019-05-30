import LayoutAuth from '../componentes/Layouts/LayoutAuth';
import Login from '../componentes/Auth/Login';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <LayoutAuth>
    <Login />
  </LayoutAuth>
);

export default Index;