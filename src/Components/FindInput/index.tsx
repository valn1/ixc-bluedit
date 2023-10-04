import React from "react";
import {InputContainer} from './styles';
import {InputBox} from "./InputBox";
import {Input} from "./interface";

const FindInput: React.FC<Input> = ({onChangeText, value}) => {
    return(
        <InputContainer>
            <InputBox value={value} onChangeText={onChangeText}></InputBox>
        </InputContainer>
    )
}
export {FindInput}
