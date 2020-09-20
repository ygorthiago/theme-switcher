import React, { useContext } from 'react';
import Switch from 'react-switch';
import {ThemeContext } from 'styled-components';
import { shade } from 'polished'
import { FiSun, FiMoon } from 'react-icons/fi';

import { Container, SwitchContainer } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1>
        Theme Switcher
      </h1>
      <SwitchContainer>
        <FiSun size={20}/>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={15}
          offColor={shade(0.2 ,colors.primary)}
          onColor={colors.secundary}
          className="switch"
        />
        <FiMoon size={20} />
      </SwitchContainer>
    </Container>
  );
};

export default Header;