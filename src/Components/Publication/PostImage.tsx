import React from "react";
import {ImagePost, ViewPostImage, dotStyle} from './styles'
import {dataToPosting} from "./interface";
import Swiper from 'react-native-swiper'
import {Text, View} from "react-native";

const PostImage: React.FC<dataToPosting> = ({publicationImage}) => {
    const StylesButon = (valor :string) => <Text style={{fontSize: 80, color: 'white'}}>{valor}</Text>
    const dot = (dotColor: string) => <View style={dotStyle(dotColor)} />

    const image = publicationImage || [];

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
            {image.map((item, index) => (
                <ViewPostImage key={index}>
                    <ImagePost resizeMode="contain" source={{uri: item}}/>
                </ViewPostImage>
            ))}
        </Swiper>
    )
}
export {PostImage};
