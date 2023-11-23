import React, {useRef} from "react";
import {InputBoxContainer, InputContainer, LupaIcon, Text, TextInputFind} from './styles';
import {TextInput, TouchableOpacity} from "react-native";
import {InputProps} from "@rneui/base";

const FindInput: React.FC<InputProps> = ({value, onChangeText}) => {
    const inputRef = useRef<TextInput>(null)

    const inputFocus = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    return(
        <InputContainer>
            <InputBoxContainer>
                <Text>b/</Text>
                <TextInputFind
                    value={value}
                    onChangeText={onChangeText}
                    ref={inputRef}/>
                <TouchableOpacity onPress={inputFocus} activeOpacity={0.7}>
                    <LupaIcon name={"magnifying-glass"}></LupaIcon>
                </TouchableOpacity>
            </InputBoxContainer>
        </InputContainer>
    )
}
export {FindInput}
