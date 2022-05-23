import styled from 'styled-components';
import FarmerLogo from './../../../assets/farmer.svg';

export const AboutSection = styled.section`
  background-color: ${(props) => props.theme.colors.colorForBackgroundAbout};
  padding: 0;
  margin-bottom: 100px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: ${(props) => props.theme.pageWidth};
  padding: 183px ${(props) => props.theme.pagePadding};
  margin: 0 auto;
  min-height: 600px;

  &::before {
    content: '';
    position: absolute;
    width: 446px;
    height: 446px;
    border-radius: 50%;
    background-color: #C4E2FF;
    right: 90px;
    bottom: 77px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 273px;
    height: 627px;
    background-image: url(${FarmerLogo});
    right: 180px;
    bottom: -70px;

  }
`;

export const Text = styled.p`
  padding: 0;
  margin: 24px 0 0;
  max-width: 550px;
`;
