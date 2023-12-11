import React from "react";
import {ButtonGeneric} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import {GenericIcon} from "./interface";
import {RFValue} from "react-native-responsive-fontsize";

const GenericButton: React.FC<GenericIcon> = ({IconsProps, onPress}) => {
    return(
        <ButtonGeneric onPress={onPress}>
            <Icon name={IconsProps.name} size={RFValue(IconsProps.size)} color={IconsProps.color}/>
        </ButtonGeneric>
    )
}
export {GenericButton};
