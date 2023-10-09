import styled from "styled-components/native";
import {Avatar} from "@rneui/base";

export const PostContainer = styled.View`
  margin-top: 20px;
  background-color: #190049;
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
export const PostCommentView = styled.View`
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
  color: #ffffff;
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
  color: white;
  margin: 10px 15px 6px;

`;
export const ContentText = styled.Text`
  font-size: 15px;
  color: white;
  margin-left: 23px;
  margin-right: 23px;
`;

export const CommentAmount = styled.Text`
  color: white;
  font-size: 15px;
  margin-right: 7px;
  margin-top: 3px;
`;









