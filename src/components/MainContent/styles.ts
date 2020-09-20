import styled from 'styled-components';

export const Container = styled.div`  
  background: ${props => props.theme.colors.contentBackground};
  color: ${props => props.theme.colors.text};
  
  justify-content: center;
  align-items: center;
  margin: 50px 100px;
  padding: 30px;
  height: 200px;
`;