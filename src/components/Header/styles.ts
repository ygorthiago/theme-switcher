import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const SwitchContainer = styled.div`
  .switch {
    padding: 0px 5px 0px 5px;
  }
`;