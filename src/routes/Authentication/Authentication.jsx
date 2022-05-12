import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => (
  <AuthenticationContainer>
    <SignInForm />
    <SignUpForm />
  </AuthenticationContainer>
);

export default Authentication;
