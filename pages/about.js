import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {auth,db} from '../firebase';

function About() {
  const handleFillData = () =>{

  }

  const handleSignOut = () =>{
    auth.signOut();
  }

  return (
    <Container>
      <StyledButton onClick={handleFillData} size='large' color='primary' variant='outlined'>Fill Data</StyledButton>
      <StyledButton onClick={handleSignOut} size='large' color='secondary' variant='outlined'>Sign Out</StyledButton>
    </Container>
  )
}

export default About;
const Container = styled.div`
display:grid;
grid-template-columns: repeat(4,auto);
justify-content:center;
`;

const StyledButton = styled(Button)`
top:50%;
&&&{
  margin: 10px;
  font-family: monospace;
  font-weight:900;
}
`;