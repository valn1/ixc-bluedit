import styled from "styled-components/native";
import {Dimensions} from "react-native";

export const ViewHeader = styled.View` 
    height: ${Dimensions.get("window").height * 0.3}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
