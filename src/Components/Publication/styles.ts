import styled from "styled-components/native";
import {Avatar} from "@rneui/base";

export const ViewPost = styled.View`
  height: 190px;
  width: 93%;
  background-color: #190049;
  border-radius: 60px;
`;

export const ViewHeaderPost = styled.View` 
  height: 35%;
  width: 100%;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  align-items: flex-end;
  flex-direction: row;
`;
export const ViewBoddyPost = styled.View` 
    
`;
export const ViewCommentPost = styled.View` 
  flex: 1;
  justify-content: flex-end;
  margin-right: 40px;
  flex-direction: row;
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
` ;

export const HowManyComments = styled.Text` 
  color: white;
  font-size: 15px;
  margin-right: 5px;
`;
