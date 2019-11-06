import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 0 1rem;
  width: 100%;
  max-width: 960px;
`;

interface Attrs extends HTMLAttributes<HTMLElement> {
  nameer?: string;
}

export const Main = (props: Attrs) => <StyledMain>{props.children}</StyledMain>;

export default Main;
