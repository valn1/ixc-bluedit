/*******************************************************************************************
 * responsável por fazer as requisições da api e retornar os dados ou mensagens de erro
 *
 * Todos os links abaixo se adicionar ao fim deles um /numero voce consegue buscar pelo id
 * do item desejado
 *
 * As rotas alinnhadas que eu tenho disponiveis são:
 * /nomeDaRota/idDeAlgumItemDaRota/algoRelacionado
 * /posts/1/comments
 * /albums/1/photos
 * /users/1/albums
 * /users/1/todos
 * /users/1/posts
 *******************************************************************************************/
import {Alert} from "react-native";


//--------------------------------------------------------------------------------------------
//Metodos Get
//--------------------------------------------------------------------------------------------


//a função getPosts pega todos os posts do banco de dados, tem 100 posts diferentes de um
//total de 10 usuarios
//cada post contem as seguintes propiedades: userId(number), id(number), title(string) e body(strind)
export const getPosts = async (): Promise<any> => { //100 posts
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await resp.json();
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
        //TypeError: Network request failed
    }
}

//a função getComments pega todos os comentarios dos pots, tendo no total 500 comentarios
//cada post comentario contém as seguintes propiedades: userId(number), id(number),
//name(string)-o name nao é o nome do usuario, email(string) e body(strind)
export const getComments = async (): Promise<any> => { //500 comments
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
        return await resp.json();
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}


//a função getAlbum pega todos os Albuns que tem as propriedades userId(number), id(number) e title(string)
//tendo um total de 100 albuns, cada album tem um total de 50 photos
export const getAlbums = async (): Promise<any> => {  //100 albums
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/albums');
        return await resp.json();
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}


//a função getPhotos pega fotos que estao em albuns, tem um total de 5000 fotos separadas em 100 albuns
//cada foto tem um albumId(number), id(number), title(string), url(string) e thumbnailUrl(string)
//tem um total de 5000 fotos
export const getPhots = async (): Promise<any> => {  //5000 photos
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
        return await resp.json();
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}


//a função get todos retorna os valores: userId(number), id(number), title(string) e completed(booleano)
//tem um total de 200 "todos", que eu ainda nao sei para que serve
export const getTodos = async (): Promise<any> => {  //200 todos
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/');
        return await resp.json();
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}


//a função getUsers pega todos usuarios do banco de dados, cada usuario tem
//"id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
export const getUsers = async (): Promise<any> => {  //10 users
    try {
        const resp: Response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await resp.json();
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}

export const getPostsFromUser = async (userId: number): Promise<any> => {
    try {
        const resp: Response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        return await resp.json();
    } catch (err) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}

export const getCommentFromPosts = async (postId: number): Promise<any> => {
    try {
        const resp: Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        return await resp.json();
    } catch (err) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}

export const getPhotosFromAlbum = async (albumId: number): Promise<any> => {
    try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        return await resp.json();
    } catch (err) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}

//a função getUserName serve para filtra todos os userNames para mim poder usar na hora da busca na tela inicial
export const getUserName = async (): Promise<any> => {
    try {
        const resp: Response = await fetch('https://jsonplaceholder.typicode.com/users');
        const respJSON = await resp.json();
        const userNames: string[] = [];
        respJSON.filter((response: any) => userNames.push(response.username));
        return userNames;
    } catch (e) {
        Alert.alert("Erro", "Não foi possivel buscar os dados");
    }
}

//--------------------------------------------------------------------------------------------
//Metodo Delete
//--------------------------------------------------------------------------------------------

//uma função basica para deletar algum campo existente
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
//na função postCreatePosting eu espero receber como parametro um objeto com os valores doque vai ser postado
//e é opcional passar a route que por default esta como posts, para assim fazer uma nova postagem na API
export const postCreatePost= async (postValue: object, route?: string | "posts"): Promise<void> => {
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
