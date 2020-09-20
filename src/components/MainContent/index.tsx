import React from 'react';

import { Container } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <h1>Light/Dark theme</h1>
      <br/>
      <p>
        One of the most important parts of a front-end application, of course, is Design, 
        mainly because it is proven that users tend to use fewer applications that do not 
        visually please them and even choose competitive tools with fewer resources just 
        because they have a better design.
        <br/>
        <br/>
        With that in mind, giving the user the possibility to choose which theme they want
        to use in the application is very important.
      </p>
    </Container>
  );
};

export default MainContent;