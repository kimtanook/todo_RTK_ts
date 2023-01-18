import React from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  margin: auto;
  min-width: 800px;
  max-width: 1200px;
`;

const Layout = (props: any) => {
  return <LayoutStyle>{props.children}</LayoutStyle>;
};

export default Layout;
