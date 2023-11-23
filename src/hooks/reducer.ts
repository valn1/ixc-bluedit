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
    newPost: false,
    currentID: -1
}


const reducer = (state: AppState, action: any) => {
    switch (action.type){
        case "DEFINE_URL":{
            return{
                ...state,
                url: [...state.url, action.payload]
            }
        }
        case "DEFINE_TITLE_AND_BODY":{
            return{
                ...state,
                title: action.payload.title,
                body: action.payload.body
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
                url: []
            }
        }
        case "NEW_POST" : {
            return {
                ...state,
                newPost: !state.newPost
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
                    changeName: !state.perfilOptions.changeName,
                    changeTheme: false
                }
            }
        }
        case "CHANGE_THEME": {
            return {
                ...state,
                perfilOptions: {
                    changeTheme: !state.perfilOptions.changeTheme,
                    changeName: false
                }
            }
        }
        case "CURRENT_ID": {
            return {
                ...state,
                currentID: action.payload
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
