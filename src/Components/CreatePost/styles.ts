import styled from "styled-components/native";
import {Dimensions} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";

export const CreatePostContainer = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 95px;
  background-color: #0b0224;
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: ${RFValue(14)}px;
  flex: 1;
  text-align: center;
  margin-left: 20%;
  margin-top: 15px;
`;

export const TextInButton = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 15px;
`;

export const ButtonPost = styled.TouchableOpacity`
  height: 35px;
  width: 85px;
  background-color: ${props => props.theme.colors.secundary};
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  margin-right: 20px;
  margin-top: 15px;
`;


export const ButtonGeneric = styled.TouchableOpacity`
  margin-left: 23px;
  margin-right: 23px;
  margin-top: 15px;
`;

export const BodyContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ViewInput = styled.View`
  margin-left: 30px;
  margin-top: 25px;
`;

export const InputTitle = styled.TextInput`
  font-size: ${RFValue(25)}px;
  color: ${props => props.theme.colors.text};
`;

export const InputText = styled.TextInput`
  font-size: ${RFValue(16)}px;
  color: ${props => props.theme.colors.text};
  width: 72%;
`;

export const AllOptionsPost = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 5px;
`;

export const TakePhotoView = styled.View`
  width: 100%;
  height: 130px;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  position: absolute;
  align-self: center;
  bottom: 0;
`;
export const TakePhotoButton = styled.TouchableOpacity`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  background-color: ${props => props.theme.colors.secundary};
  border: 10px ${props => props.theme.colors.primary};
`;

export const HeaderCamera = styled.View`
  width: 100%;
  height: 90px;
  background-color: ${props => props.theme.colors.backgound};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

`;

export const TakedPhotoView = styled.View`
  flex: 1;
  background-color: black;
`;

export const PrintPhoto = styled.Image`
  flex: 1;
  transform: rotate(270deg);
`;

export const ImageInCamera = styled.Image`
  //aqui os valores de wigth e heiht estão invertidos pelo rotate
  //width é vertical e height horizontal
  height: 98%;
  width: 500px;
  transform: rotate(270deg);
`;
export const ImageInGallery = styled.Image`
  height: ${Dimensions.get("window").height / 2.5}px;
  width: ${Dimensions.get("window").width}px;
`;

export const InputLink = styled.TextInput`
  width: 80%;
  height: 110px;
  background-color: ${props => props.theme.colors.backgound};
  border-radius: 20px;
  border: 5px ${props => props.theme.colors.secundary};
  margin-left: 20px;
  color: ${props => props.theme.colors.text};
  font-size: 40px;
  padding: 15px;
`;

export const LinkView = styled.View`
  top: 43%;
  position: absolute;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonView = styled.View`
  position: absolute;
  top: -1px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const DeleteOrSaveView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 40px;
`;

export const BigButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const PaginationView = styled.View`
  height: 35px;
  width: 100px;
  position: absolute;
  align-items: center;
  right: 30px;
  top: 65%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`
export const PhotoPagination = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 25px;
`;

export const LeaveInputLink = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
`
