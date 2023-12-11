import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Entypo";

export const InputContainer = styled.View`
  width: 100%;
  height: 90px;
  background-color: #0b0224;
  align-items: center;
  justify-content: center;
`;

export const InputBoxContainer = styled.View`
  width: 92%;
  height: 45px;
  background-color: ${props => props.theme.colors.backgound};
  border-radius: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const LupaIcon = styled(Icon)` 
  font-size: 35px;
  color: white;
  margin-right: 10px;
`;

export const TextInputFind = styled.TextInput` 
  flex: 1;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
  margin-left: 15px;
  margin-bottom: 3px;
`;
