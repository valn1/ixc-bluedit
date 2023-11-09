import React from "react";
import {ButtonGeneric} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import {GenericIcon} from "./interface";

const GenericButton: React.FC<GenericIcon> = ({IconsProps, onPress}) => {
    return(
        <ButtonGeneric onPress={onPress}>
            <Icon name={IconsProps.name} size={IconsProps.size} color={IconsProps.color}/>
        </ButtonGeneric>
    )
}
export {GenericButton};
