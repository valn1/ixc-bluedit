import styled from "styled-components/native";
import {Avatar} from "@rneui/base";

export const ViewPost = styled.View`
  width: 93%;
  background-color: #190049;
  border-radius: 60px;
  margin-top: 20px;
  margin-bottom: 20px;

`;
export const  ViewPostWhitImage = styled.View`
  width: 93%;
  margin-top: 20px;
  background-color: #190049;
  border-radius: 60px;
  margin-bottom: 20px;

`;

export const ViewPostImage = styled.View`
  height: 290px;
  align-items: center;
  justify-content: center;
`
export const ViewHeaderPost = styled.View` 
  height: 70px;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  align-items: flex-end;
  flex-direction: row;
`;
export const ViewBoddyPost = styled.View` 
  height: 100px;

`;
export const ViewCommentPost = styled.View` 
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
` ;

export const HowManyComments = styled.Text` 
  color: white;
  font-size: 15px;
  margin-right: 5px;
`;


export const ImagePost = styled.Image`
  height: 280px;
  width: 80%;
`;

export const dotStyle = (dotColor: string) => {
    return({
        backgroundColor: dotColor,
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 3,
        marginBottom: 3,})
}


