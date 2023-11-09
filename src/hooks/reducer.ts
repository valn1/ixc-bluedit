import {AppState} from "./interface";

const inicialAppState : AppState = {
    url: [],
    rotetaImage: true,
    publicacao: [],
    asyncPost: [],
    comentario: [],
    albums:[],
    title: "",
    body: "",
    update: false,
    perfilOptions:{
        changeName: false,
        changeTheme: false
    },
    theme: "dark"
}


const reducer = (state: AppState, action: any) => {
    switch (action.type){
        case "DEFINE_URL":{
            return{
                ...state,
                url: [...state.url, action.payload]
            }
        }
        case "DEFINE_TITLE":{
            return{
                ...state,
                title: action.payload
            }
        }
        case "DEFINE_BODY":{
            return{
                ...state,
                body: action.payload
            }
        }
        case "ROTATE_IMAGE":{
            return {
                ...state,
                rotetaImage: action.payload
            }
        }
        case "PUBLICACAO": {
            return {
                ...state,
                publicacao: [...state.publicacao, {
                    title: action.payload.title,
                    body: action.payload.body,
                    email: action.payload.email
                }]
            }
        }
        case "ASYNC_POST": {
            return {
                ...state,

            }
        }
        case "COMENTARIO": {
            return {
                ...state,
                comentario: [...state.comentario, {
                    email: action.payload.email,
                    body: action.payload.body
                }]
            }
        }
        case "ALBUM": {
            return {
                ...state,
                albums: [...state.albums, {
                    url: state.url,
                    title: action.payload.title,
                    body: action.payload.body,
                    email: action.payload.email
                }]
            }
        }
        case "CLEAR_POST" : {
            return {
                ...state,
                title: "",
                body: "",
                url: []
            }
        }
        case "EXCLUDE_PHOTO": {
            const newUrls = state.url.filter((item) => action.payload !== item)
            return {
                ...state,
                url: [...newUrls]
            }
        }
        case "UPDATE": {
            return {
                ...state,
                update: !state.update
            }
        }
        case "CHANGE_NAME": {
            return {
                ...state,
                perfilOptions: {
                    changeName: action.payload,
                    changeTheme: false
                }
            }
        }
        case "CHANGE_THEME": {
            return {
                ...state,
                perfilOptions: {
                    changeTheme: action.payload,
                    changeName: false
                }
            }
        }
        case "THEME": {
            return {
                ...state,
                theme: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export {inicialAppState, reducer};
