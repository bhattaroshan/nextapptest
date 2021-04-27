import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {auth,provider} from '../firebase';

const LogIn = () =>{
  const handleLogIn = () =>{
    auth.signInWithPopup(provider).catch(alert);
  }

  return (
    <div>
    <LogInContainer>
      <LogInLogo src='https://lh3.googleusercontent.com/proxy/jUKR1fiS75VQCSqsb6VZxOlMFTNYMgpGOHyMz3onVbv8Q181cTKSWAntTMvWoi3zm2OMGh7u48IwuLwI0UGkpkRdzKHMjYbpM_LThUQRhu4'></LogInLogo>
      <StyledButton onClick={handleLogIn} size='large' variant='outlined' color='primary'>Log in</StyledButton>
    </LogInContainer>
    </div>
  );
}
  
export default LogIn;

const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  height: 100vh;
`;

const LogInLogo = styled.img`
  height: 150px;
`;

const StyledButton = styled(Button)`
&&&{
  margin-top: 30px;
}
`;