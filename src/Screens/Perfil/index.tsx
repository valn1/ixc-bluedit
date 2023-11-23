import React, {useContext, useEffect, useState} from "react";
import {ViewGeneric} from "./Styles";
import {UserProfile} from "../../Components/UserProfile";
import {AppContext} from "../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Perfil: React.FC = () => {

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
        <ViewGeneric>
            <UserProfile
                comentario={asyncComment}
                postagens={asyncState}></UserProfile>
        </ViewGeneric>
    )
}

export default Perfil
