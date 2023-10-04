import React from "react";
import {InputBoxContainer, LupaIcon, TextInputFind, Text} from './styles';
import {Input} from "./interface";
import {Keyboard, TouchableOpacity} from "react-native";

const InputBox: React.FC<Input> = ({value, onChangeText}) => {
    const handleDismissKeyboard = () => {
        Keyboard.dismiss();
    };
    return(
        <InputBoxContainer>
            <Text>b/</Text>
            <TextInputFind
                value={value}
                onChangeText={onChangeText}/>
            <TouchableOpacity onPress={handleDismissKeyboard}>
                <LupaIcon name={"magnifying-glass"}></LupaIcon>
            </TouchableOpacity>
        </InputBoxContainer>
    )
}

export {InputBox}
