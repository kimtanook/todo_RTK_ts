import React from 'react';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  margin: auto;
  min-width: 800px;
  max-width: 1200px;
`;

// interface Props {
//   children: React.ReactNode;
// }

const Layout = (props: { children: React.ReactNode }) => {
  return <LayoutStyle>{props.children}</LayoutStyle>;
};

export default Layout;
