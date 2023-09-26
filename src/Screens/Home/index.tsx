import React from "react";
import {ViewGeneric} from "./Styles";
import {Publication} from "../../Components/Publication";
import {ScrollView} from "react-native";

const Home: React.FC = () => {
    const dataToTest = {
        title: "Teste um",
        userMail: "alexandrebeilner10@gmail.com",
        userName: "Alexandre",
        text: "Teste umTeste umTeste umTeste umTeste umTeste umTeste umTeste umTeste umTeste um"
    }

    const urlToTest: string[] = [
        "https://img.freepik.com/fotos-gratis/linhas-brilhantes-na-forma-3d-do-coracao-humano-em-fundo-escuro-generativo-ai_191095-1435.jpg",
        "https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg",
        "https://repositorio.sbrauble.com/arquivos/up/ecom/prod/t/222378/1616950989_4869150.jpg"
    ]

    return(
        <ScrollView>
            <ViewGeneric>
                <Publication
                    userMail={dataToTest.userMail}
                    userName={dataToTest.userName}
                    title={dataToTest.title}
                    text={dataToTest.text}
                />
                <Publication
                    userMail={dataToTest.userMail}
                    userName={dataToTest.userName}
                    title={dataToTest.title}
                    text={dataToTest.text}
                    publicationImage={urlToTest}
                />
                <Publication
                    userMail={dataToTest.userMail}
                    userName={dataToTest.userName}
                    title={dataToTest.title}
                    text={dataToTest.text}
                />
                <Publication
                    userMail={dataToTest.userMail}
                    userName={dataToTest.userName}
                    title={dataToTest.title}
                    publicationImage={urlToTest}
                    text={dataToTest.text}
                />
            </ViewGeneric>
        </ScrollView>
    )
}

export default Home
