import React, {useContext, useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";
import {Body} from "./Body";
import {useTheme} from "styled-components";
import {AppContext} from "../../App";
import {getUserProfile} from "../../helpers/APIHelperData";
import {PostData} from "../Post/interface";

const FollowerProfile: React.FC = () => {
    const theme = useTheme()
    const {state} = useContext(AppContext)
    const [album, setAlbum] = useState<PostData[]>([])
    const [postagem, setPostagem] = useState<PostData[]>([])

    const IsLoading = () => {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <ActivityIndicator color={"#e6a600"} size={"large"}></ActivityIndicator>
            </View>
        )
    }

    useEffect(() => {
        const storeData = async () => {
            const getUser = await getUserProfile(state.currentID);
            getUser.map((item) => {
                item.album
                    ? setAlbum(prevState => [...prevState, item])
                    : setPostagem(prevState => [...prevState, item]);
            })
        }
        storeData();
    }, [state.currentID])

    return(
        <View style={{flex: 1, backgroundColor: theme.colors.backgound}}>
            {postagem.length === 0 ? <IsLoading/>
                : <>
                    <Body postagens={postagem} albums={album}></Body>
                </>
            }
        </View>
    )
}

export {FollowerProfile}
