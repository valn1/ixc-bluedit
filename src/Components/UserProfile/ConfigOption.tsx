import React from "react";
import {GenericOpacitiOptions, OptionIcon, OptionsName} from "./styles";
import {Config} from "./interface";

const ConfigOption: React.FC<Config> = ({onPress, placeholder, iconName}) => {

    return(
        <GenericOpacitiOptions
            onPress={onPress}
            activeOpacity={0.5}>
            <OptionIcon name={iconName}/>
            <OptionsName>{placeholder}</OptionsName>
        </GenericOpacitiOptions>
    )
}

export {ConfigOption}
