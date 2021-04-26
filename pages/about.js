import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

function About() {
  return (
    <Container>
      <StyledButton size='large' color='primary' variant='outlined'>Sign In</StyledButton>
      <StyledButton size='large' color='secondary' variant='outlined'>Sign Out</StyledButton>
      <StyledButton size='large' color='secondary' variant='outlined'>Quit</StyledButton>
      <StyledButton size='large' color='secondary' variant='outlined'>Quit</StyledButton>
      <StyledButton size='large' color='secondary' variant='outlined'>Quit</StyledButton>
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