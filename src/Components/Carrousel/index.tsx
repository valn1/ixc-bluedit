import React from "react";
import {Photo, ImageContainer, dotStyle} from './styles'
import {Album} from "./interface";
import Swiper from 'react-native-swiper'
import {Text, View} from "react-native";

const Carrousel: React.FC<Album> = ({AlbumData}) => {
    const StylesButon = (valor :string) => <Text style={{fontSize: 80, color: 'white'}}>{valor}</Text>
    const dot = (dotColor: string) => <View style={dotStyle(dotColor)} />

    return(
        <Swiper
            horizontal={true}
            showsButtons={true}
            loop={false}
            nextButton={StylesButon("›")}
            prevButton={StylesButon("‹")}
            activeDot={dot("#e6a600")}
            dot={dot("#fff")}
            paginationStyle={{bottom: -25}}
            height={290}
        >
            {AlbumData?.photos?.map((item, index) => (
                <ImageContainer key={index}>
                    <Photo resizeMode="contain" source={{uri: item.url}}/>
                </ImageContainer>
            ))}

        </Swiper>
    )
}
export {Carrousel};
