import React, {useRef, useState} from "react";
import {Photo, ImageContainer, DotContainer, BorderDot} from './styles'
import {Album} from "./interface";
import Swiper from 'react-native-swiper'
import {Text, View} from "react-native";
import Dots from "react-native-dots-pagination";

const Carrousel: React.FC<Album> = ({AlbumData}) => {
    const StylesButon = (valor: string) => <Text style={{fontSize: 80, color: 'white'}}>{valor}</Text>
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');
    const flatListRef = useRef(null)

    const handleIndexChanged = (index: number) => {
        setCurrentIndex(index);
        if (index === currentIndex + 1) {
            setDirection("rigth");
        }
        if (index === currentIndex - 1) {
            setDirection("left");
        }
    };

    const SetDots = () => {
        if (AlbumData.photos.length <= 5 && AlbumData.photos.length > 1) {
            return (
                <Dots
                    length={AlbumData.photos?.length}
                    active={currentIndex}
                    activeColor={"#e6a600"}
                    activeDotHeight={12}
                    activeDotWidth={12}
                    passiveDotWidth={12}
                    passiveDotHeight={12}
                    marginHorizontal={5}
                    passiveColor={"#fff"}
                />
            )
        }
        if (AlbumData.photos.length > 5 && currentIndex <= AlbumData.photos.length - 3) {
            return (
                currentIndex > 3
                    ? <DotContainer>
                        <BorderDot></BorderDot>
                        <Dots
                            length={3}
                            active={direction === "left" ? 0 : 2}
                            activeColor={"#e6a600"}
                            activeDotHeight={12}
                            activeDotWidth={12}
                            passiveDotWidth={12}
                            passiveDotHeight={12}
                            marginHorizontal={5}
                            passiveColor={"#fff"}
                            width={77}
                            paddingHorizontal={5}

                        ></Dots>
                        <BorderDot></BorderDot>
                    </DotContainer>
                    : <DotContainer>
                        <Dots
                            length={4}
                            active={currentIndex < 4 ? currentIndex : 3}
                            activeColor={"#e6a600"}
                            activeDotHeight={12}
                            activeDotWidth={12}
                            passiveDotWidth={12}
                            passiveDotHeight={12}
                            marginHorizontal={5}
                            passiveColor={"#fff"}
                            width={104}
                        ></Dots>
                        <BorderDot></BorderDot>
                    </DotContainer>
            )
        }
        if (currentIndex >= AlbumData.photos.length - 2 && AlbumData.photos.length > 1) {
            return (
                <DotContainer>
                    <BorderDot></BorderDot>
                    <Dots
                        length={4}
                        active={currentIndex === AlbumData.photos.length -1 ? 3 : 2}
                        activeColor={"#e6a600"}
                        activeDotHeight={12}
                        activeDotWidth={12}
                        passiveDotWidth={12}
                        passiveDotHeight={12}
                        marginHorizontal={5}
                        passiveColor={"#fff"}
                    />
                </DotContainer>
            )
        }
    }

    return (
        <View>
            <Swiper
                ref={flatListRef}
                horizontal={true}
                showsButtons={true}
                loop={false}
                nextButton={StylesButon("›")}
                prevButton={StylesButon("‹")}
                scrollEnabled={false}
                onIndexChanged={handleIndexChanged}
                showsPagination={false}
                paginationStyle={{bottom: -25}}
                height={290}
                key={AlbumData.id}
            >
                {AlbumData.photos.map((item, index) => (
                    <ImageContainer key={index}>
                        <Photo key={item.id} resizeMode="contain" source={{uri: item.url}}/>
                    </ImageContainer>
                ))}
            </Swiper>
            {SetDots()}
        </View>
    )
}
export {Carrousel};