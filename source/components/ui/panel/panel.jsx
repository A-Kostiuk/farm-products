import styled from 'styled-components';
import { css } from 'styled-components';

const Panel = styled.section`
  background-color: ${(props) => props.theme.colors.basicWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 20px;
  ${(props) =>
    props.marginBottom
      ? css`
          margin-bottom: ${props.marginBottom}px;
        `
      : null}
`;

export default Panel;
