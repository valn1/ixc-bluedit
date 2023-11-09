import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import {Animated} from "react-native";
export const UserProfileContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.backgound};
`;

export const UpsideContainer = styled(Animated.View)`
  justify-content: space-between;
  background-color: ${props => props.theme.colors.backgound};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  overflow: hidden;
`;

export const UserImageProfile = styled.Image`
  flex: 1
`;

export const ImageView = styled(Animated.View)`
  border: 5px #fff;
  border-radius: 10px;
  margin-left: 25px;
  width: 140px;
  height: 140px;
`;

export const UserNameText = styled(Animated.Text)`
  color: ${props => props.theme.colors.text};
  margin-left: 30px;
  font-size: 30px;
`;
export const PublicationsContainer = styled(Animated.View)`
  border-width: 3px;
  border-top-color: ${props => props.theme.colors.backgound};
  border-right-color: ${props => props.theme.colors.primary};
  border-left-color: ${props => props.theme.colors.primary};
  border-bottom-color: ${props => props.theme.colors.backgound};
`;


export const ViewHeaderOptions = styled(Animated.View)`
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-width: 3px;
  border-top-color: ${props => props.theme.colors.primary};
  border-right-color: ${props => props.theme.colors.primary};
  border-left-color: ${props => props.theme.colors.primary};
  border-bottom-color: ${props => props.theme.colors.backgound};
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  height: 70px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 50px;
  width: 150px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const ButtonName = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;
export const ExcludeView = styled.View`
  width: 100%;
  height: 30%;
  background-color: #250069;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

export const CloseModal = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const TrashButton = styled.TouchableOpacity`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  border: 4px #e6a600;
  align-items: center;
  justify-content: center;
`;

export const ButtonOptions = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: 25px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ConfigContainer = styled.View`

`;

export const OpenConfigButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
`;

export const OptionsView = styled.View`
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: ${props => props.theme.colors.backgound};
  align-items: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const GenericOpacitiOptions = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;
`;

export const OptionsName = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  margin-left: 30px;
`;

export const OptionIcon = styled(Icon)`
  font-size: 30px;
  color: ${props => props.theme.colors.text};
  margin-left: 15px;
`;

export const BackButton = styled.TouchableOpacity` 
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 20px;
`;

export const GenericView = styled.View` 
    align-items: center;
  margin-top: 50px;
`;
export const InputNewName = styled.TextInput` 
    width: 80%;
  height: 80px;
  border: 2px #000;
  margin-top: 20px;
  border-radius: 25px;
  font-size: 20px;
  padding: 20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  width: 80%;
  height: 80px;
  border-radius: 10px;
  background-color: #250069;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;



export const ViewImage = styled.View` 
  height: 200px;
  width: 200px;
  border: 7px #fff;
  border-radius: 10px;
`;
export const UserImage = styled.Image`
  flex: 1
`;


export const ThemeContainer = styled.View` 
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const ThemeOptionsView = styled.View` 
  border: 5px #4d4a4a;
  border-radius: 15px;
  width: 90%;
  height: 300px;
  background-color: black;
`;
export const Theme = styled.View`
  background-color: #4d4a4a;
  width: 100%;
  height: 30%;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
`;

export const ThemeName = styled.Text` 
    color: white;
  font-size: 20px;
`;

export const ConfirmChangeTheme = styled.TouchableOpacity` 
  height: 60px;
  width: 50%;
  background-color: white;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
export const View = styled.View` 
    flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ConfirmText = styled.Text`
  font-size: 18px;
  color: black;
`;
