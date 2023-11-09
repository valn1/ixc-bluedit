import React, {useContext, useEffect, useState} from "react";
import {UserProfileContainer} from "./styles"
import {UserPublication} from "./UserPublication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {AppContext} from "../../App";

const UserProfile: React.FC = () => {
    const [asyncState, setAsyncState] = useState([])
    const [asyncComment, setAsyncComments] = useState([])
    const {state} = useContext(AppContext)

    useEffect(() => {
        const getData = async () => {
            try{
                const getComments = await AsyncStorage.getItem("Comments");
                const getPosts = await AsyncStorage.getItem("Publication");
                if(getPosts !== null){
                    setAsyncState(JSON.parse(getPosts));
                }
                if(getComments !== null){
                    setAsyncComments(JSON.parse(getComments));
                }
            }catch (e){
                console.log(e);
            }
        }
        getData();
    }, [state.update])

    return(
        <UserProfileContainer>
            <UserPublication postagens={asyncState} comentario={asyncComment}></UserPublication>
        </UserProfileContainer>
    )
}

export {UserProfile}
