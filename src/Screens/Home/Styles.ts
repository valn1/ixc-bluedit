import styled from "styled-components/native";

export const HomeContainer = styled.SafeAreaView` 
  flex: 1;
  background-color: ${props => props.theme.colors.backgound};
  justify-content: center;
  align-items: center;`;
export const ActivityIndicatorLoading = styled.ActivityIndicator`

`;
export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
