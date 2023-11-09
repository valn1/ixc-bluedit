import styled from "styled-components/native";
import {Avatar} from "@rneui/base";

export const PostContainer = styled.KeyboardAvoidingView`
  margin-top: 20px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 60px;
  margin-bottom: 20px;

`;

export const PostHeaderView = styled.View`
  height: 70px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  align-items: flex-end;
  flex-direction: row;
`;
export const ViewBoddyPost = styled.View`
  flex: 1;
  margin-bottom: 15px;
`;
export const PostCommentView = styled.KeyboardAvoidingView`
  height: 30px;
  justify-content: flex-end;
  margin-right: 40px;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const AvatarImage = styled(Avatar)`
  height: 55px;
  width: 55px;
  margin-left: 13px;
`;

export const TextUserName = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 5px;
`;
export const TitleView = styled.View`
`;

export const ContentView = styled.View`
`;
export const TitleText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  margin: 10px 15px 6px;

`;
export const ContentText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.text};
  margin-left: 23px;
  margin-right: 23px;
`;

export const CommentAmount = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 15px;
  margin-right: 7px;
  margin-top: 3px;
`;

export const CommentsContainer = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.colors.backgound};
  align-items: center;
`;

export const HeaderCommentsModalView = styled.View`
  flex-direction: row;
  width: 100%;
  height: 90px;
  background-color: #0b0224;
  align-items: center;
`;

export const CommentTitle = styled.Text`
  color: white;
  font-size: 18px;
  flex: 1;
  text-align: center;
  margin-right: 50px;
`;

export const ExitButton = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const CommentView = styled.View`
  margin-top: 20px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 60px;
  margin-bottom: 20px;
`;

export const HeaderComment = styled.View`
  height: 70px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  align-items: flex-end;
  flex-direction: row;
`;

export const BodyComment = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 35px;
`;

export const LittleBodyComment = styled.View`
  height: 50px;
  justify-content: center;
  margin-left: 35px;
  margin-bottom: 17px;
`;

export const ButtonShowMore = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  margin-right: 40px;
  margin-bottom: 20px;
`;
export const TextButton = styled.Text`
  color: blue;
  font-size: 15px;
`;
export const CommentText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 15px;
  margin-right: 20px;
  margin-top: 5px;
`;

export const InputCommentView = styled.View`
  height: 80px;
  width: 100%;
  background-color: ${props => props.theme.colors.backgound};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InputComment = styled.TextInput`
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  height: 50px;
  background-color: ${props => props.theme.colors.primary};
  width: 85%;
  border-radius: 20px;
  margin-right: 5px;
`;


export const SendCommentButton = styled.TouchableOpacity` 
  height: 45px;
  width: 45px;
  align-items: center;
  justify-content: center;
`;
