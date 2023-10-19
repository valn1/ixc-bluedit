import {Alert} from "react-native";

//--------------------------------------------------------------------------------------------
//Metodos Get
//--------------------------------------------------------------------------------------------

/**
 * routes: /posts - 100 posts, /comments - 500 comments, /albums - 100 albums, /photos - 5000 photos
 * /todos - 200 todos, /users - 10 users
 *
 * params: /posts/1/comments, /albums/1/photos, /users/1/albums, /users/1/todos, /users/1/posts
 *
 * https://jsonplaceholder.typicode.com/${route}${params.key}
 *
 * @param route
 * @param params
 *
 */
export const get = async (route:string, params?:Record<string,string>): Promise<any>=> {
    try {
        if(params){
            const resp: Response = await fetch(`https://jsonplaceholder.typicode.com/${route}${params.key}`);
            return await resp.json();
        }else {
            const resp: Response = await fetch(`https://jsonplaceholder.typicode.com/${route}`);
            return await resp.json();
        }
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}

//--------------------------------------------------------------------------------------------
//Metodo Delete
//--------------------------------------------------------------------------------------------

/**
 * Function delete
 * @param route
 * @param id
 */
export const deleteItem = async (route: string, id: number): Promise<void> => {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/${route}/${id}`, {
            method: 'DELETE',
        });
        console.log("Deletado com sucesso")
    } catch (err) {
        Alert.alert("Ocorreu um Erro", "Não foi possivel deletar o campo escolhido");
        console.log(err);
    }

}

//--------------------------------------------------------------------------------------------
//Metodos Post
//--------------------------------------------------------------------------------------------

/**
 *Function post
 * @param commentValue
 * @param postValue
 * @param route
 */
export const postPost = async (
    postValue: {title: string ,body: string, userId: number},
    route?: string | "posts"): Promise<void> => {
    if (postValue) {
        try {
             await fetch(`https://jsonplaceholder.typicode.com/${route}`, {
                method: 'POST',
                body: JSON.stringify(postValue),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        } catch (err) {
            console.log(err);
            Alert.alert("Ocorreu um Erro", "Não foi possivel fazer a postagem, tente novamente mais tarde");
        }
    } else {
        Alert.alert("Ocorreu um Erro", "Preencha todos os campos");
    }
}
export const postComment = async (
    commentValue: {email?: string, body: string, postId?: number, name: string},
    route?: string | "comments"): Promise<void> => {
    if (commentValue.body) {
        try {
             await fetch(`https://jsonplaceholder.typicode.com/${route}`, {
                method: 'POST',
                body: JSON.stringify(commentValue),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        } catch (err) {
            console.log(err);
            Alert.alert("Ocorreu um Erro", "Não foi possivel fazer o comentario, tente novamente mais tarde");
        }
    } else {
        Alert.alert("Ocorreu um Erro", "Preencha o campo de comentários");
    }
}

//--------------------------------------------------------------------------------------------
//Metodo Put
//--------------------------------------------------------------------------------------------

/**
 * Function put
 * @param postValue
 * @param route
 * @param id
 */
export const put = async (postValue: {id: number, title: string, body: string, userId: number}, route: string, id: number)=> {
    if (postValue) {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/${route}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(postValue),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        } catch (err) {
            console.log(err);
            Alert.alert("Ocorreu um Erro", "Não foi possivel atualizar, tente novamente mais tarde");
        }
    } else {
        Alert.alert("Ocorreu um Erro", "Preencha todos os campos");
    }
}
