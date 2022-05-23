import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: ${(props) => props.theme.pageWidth};
  min-height: ${(props) => props.theme.footerHeight};
  padding: 0 ${(props) => props.theme.pagePadding};
  margin: 0 auto;
`;

export const Copyright = styled.p`
  margin: 0;
`;
