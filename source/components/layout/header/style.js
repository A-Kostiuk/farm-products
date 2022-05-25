import styled from 'styled-components';

export const StyledHeader = styled.header`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const HeaderContent = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.pagePadding};
  margin: 0 auto;
  width: ${(props) => props.theme.pageWidth};
  min-height: ${(props) => props.theme.headerHeight};
`;
