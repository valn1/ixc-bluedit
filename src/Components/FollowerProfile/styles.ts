import styled from "styled-components/native";
import {Animated} from "react-native";

export const HeaderContainer = styled(Animated.View)`
  background-color: ${props => props.theme.colors.backgound};
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  overflow: hidden;
`;

export const BodyContainer = styled.View`
  flex: 3;
  border-right-color: ${props => props.theme.colors.border};
  border-left-color: ${props => props.theme.colors.border};
  
`;

export const ImageView =  styled(Animated.View)` 
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxName = styled(Animated.Text)` 
    font-size: 30px;
  color: ${props => props.theme.colors.text};
`;

export const BackButton = styled.TouchableOpacity`
    height: 60px;
  width: 60px;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 99;
`;

export const ShapeImage = styled(Animated.View)`
  height: 150px;
  width: 150px;
  border-radius: 75px;
  border: 4px ${props => props.theme.colors.text};
`;

export const Avatar = styled.Image`
  flex: 1;
  border-radius: 75px;
`;

export const PostsView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-color: ${props => props.theme.colors.border};
  border-right-color: ${props => props.theme.colors.border};
  border-left-color: ${props => props.theme.colors.border};
  border-top-width: 3px;
  border-left-width: 3px;
  border-right-width: 3px;
  height: 80px;
`;

export const ContentView = styled.View` 
  flex: 2.3;  
`;
