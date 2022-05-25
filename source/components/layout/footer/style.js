import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 1;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: ${(props) => props.theme.pageWidth};
  min-height: ${(props) => props.theme.footerHeight};
  padding: 0 ${(props) => props.theme.pagePadding};
  margin: 0 auto;
`;

export const Copyright = styled.p`
  margin: 0;
`;
