import React from "react";
import {ButtonContainer, ButtonName} from "./styles"
import {ButtonProps} from "./interface";

const HeaderButtons: React.FC<ButtonProps> = ({name , color, onPress}) => {
    return(
        <ButtonContainer onPress={onPress}>
            <ButtonName style={{color: color ? "#cb9412" : "#91a9d0"}}>{name}</ButtonName>
        </ButtonContainer>
    )
}

export {HeaderButtons}
