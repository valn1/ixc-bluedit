import React from "react";
import {ViewGeneric} from "./Styles";
import {Publication} from "../../Components/Publication";

const Home: React.FC = () => {
    const datamock = {
        title: "Teste um",
        userMail: "alexandrebeilner10@gmail.com",
        userName: "Alexandre"
    }

    return(
        <ViewGeneric>
            <Publication userMail={datamock.userMail} userName={datamock.userName} title={datamock.title}/>
        </ViewGeneric>
    )
}

export default Home
