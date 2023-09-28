import React from "react";
import {ViewGeneric} from "./Styles";
import {Post} from "../../Components/Post";
import {FlatList} from "react-native";
import {Album} from "../../Components/Carrousel/interface";

const Home: React.FC = () => {
    const dataToTest = {
        title: "Teste um",
        userMail: "alexandrebeilner10@gmail.com",
        userName: "Alexandre",
        text: "Teste umTeste umTeste umTeste umTeste umTeste umTeste umTeste umTeste umTeste um"
    }

    const urlToTest: Album = {
        AlbumData: [
            {
                userId: 1,
                id: 1,
                title: "quidem molestiae enim",
                photo: {
                    albumId: 1,
                    id: 6,
                    title: "accusamus ea aliquid et amet sequi nemo",
                    url: "https://via.placeholder.com/600/56a8c2",
                    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
                }
            },
            {
                userId: 1,
                id: 2,
                title: "sunt qui excepturi placeat culpa",
                photo: {
                    albumId: 1,
                    id: 7,
                    title: "officia delectus consequatur vero aut veniam explicabo molestias",
                    url: "https://via.placeholder.com/600/b0f7cc",
                    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
                }
            },{
                userId: 1,
                id: 3,
                title: "omnis laborum odio",
                photo: {
                    albumId: 1,
                    id: 8,
                    title: "aut porro officiis laborum odit ea laudantium corporis",
                    url: "https://via.placeholder.com/600/54176f",
                    thumbnailUrl: "https://via.placeholder.com/150/54176f"
                }
            },{
                userId: 1,
                id: 4,
                title: "non esse culpa molestiae omnis sed optio",
                photo: {
                    albumId: 1,
                    id: 9,
                    title: "qui eius qui autem sed",
                    url: "https://via.placeholder.com/600/51aa97",
                    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
                }
            }
        ]
    }

    return(
            <FlatList  data={urlToTest.AlbumData} renderItem={({item}) => {
                return(
                    <ViewGeneric key={item.id}>
                        <Post
                            userMail={dataToTest.userMail}
                            userName={dataToTest.userName}
                            post={{title: item.title, body: item.photo?.title}}
                            album={urlToTest}
                        />
                    </ViewGeneric>
                )
            }}/>
    )
}

export default Home
