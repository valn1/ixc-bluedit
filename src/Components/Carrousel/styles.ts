import styled from "styled-components/native";

export const Photo = styled.Image`
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
export const ImageContainer = styled.View`
  height: 290px;
  align-items: center;
  justify-content: center;
`
