import styled from 'styled-components';
import { Li, Ul } from '../../styled';
import Title from '../../ui/title/title';

export const FeaturesSection = styled.section`
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding: 100px ${(props) => props.theme.pagePadding};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeaturesTitle = styled(Title)`
  margin-bottom: 64px;
`;

export const FeaturesList = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 64px;
  align-self: stretch;
`;

export const FeatureItem = styled(Li)`
  padding: 20px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colors.colorForBackgroundFeatureBad
      : props.theme.colors.colorForBackgroundFeatureGood};
`;
