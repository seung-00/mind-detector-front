import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixin';

const TitleWrapper = styled.div`
  font-weight: 600;
  letter-spacing: -0.15rem;

  // Small
  font-size: 5rem;
  line-height: 6rem;

  ${respondTo.desktop`
    font-size: 8rem;
    line-height: 9.2rem;
  `}
  color: ${(props) => props.theme.main};

  ${(props: any) =>
    props.isSmall &&
    css`
      font-size: 5rem;
      line-height: 6rem;
    `}
`;

function TitleBox({ isSmall, ...rest }: any) {
  return (
    <TitleWrapper isSmall={isSmall} {...rest}>
      마인드
      <br />
      디텍터
    </TitleWrapper>
  );
}

export default TitleBox;
