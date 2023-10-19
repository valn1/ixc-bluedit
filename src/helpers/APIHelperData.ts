import {get} from "./APIHelper";
import {PostData} from "../Components/Post/interface";

export const getUsersAndPosts = async (): Promise<PostData[]> => {
    const users = await get("users");
    const posts = await get("posts");

    const userAndPost: PostData[] = [];
    let setPost = 0;

    /*nessa primeira parte eu referencio cada usuario para seus posts, usando o id do usuario
    * e o userId do post, o setPost serve como index para o array de posts */
    users.map((item: any) => {
        while (userAndPost.length < posts.length && item.id === posts[setPost].userId) {
            userAndPost.push({
                userData: {
                    userId: item.id,
                    userMail: item.email,
                    userName: item.username,
                },
                post: {
                    ...posts[setPost],
                    comments: [],
                }
            })
            setPost = setPost + 1;
        }
    })

    const comments = await get("comments");
    let setComment = 0;
    /*nesta segunda parte eu pego os posts e adiciono comentarios a eles, bem semelhante
    * a primeira parte, usando o setComment pata percorrer o array de comentarios*/
    userAndPost.map((item) => {
        while (setComment < comments.length && item.post?.id === comments[setComment].postId) {
            item.post?.comments?.push({...comments[setComment]})
            setComment = setComment + 1;
        }
    })

    const albuns = await get("albums");
    const albumAndPhotos: PostData[] = [];
    let setAlbum = 0;
    /*aqui então eu faço a ligação dos usuarios com os albuns*/
    users.map((item: any) => {
        while (albumAndPhotos.length < albuns.length && item.id === albuns[setAlbum].userId) {
            albumAndPhotos.push({
                userData: {
                    userId: item.id,
                    userMail: item.email,
                    userName: item.username,
                },
                album: {
                    AlbumData: {
                        ...albuns[setAlbum],
                        photos: []
                    }
                }
            })
            setAlbum = setAlbum + 1;
        }
    })

    /*e aqui eu aldiciono as fotos referentes a cada album, useus em todos os maps sempre a mesma logica
    * do while para ficar mais facil de entender*/
    const photos = await get("photos");
    let setPhoto = 0
    albumAndPhotos.map((item) => {
        while (setPhoto < photos.length && item.album?.AlbumData.id === photos[setPhoto].albumId) {
            item.album?.AlbumData.photos.push({...photos[setPhoto]})
            setPhoto = setPhoto + 1;
        }
    })


    let count = 4;
    const lengthByUserAndPost = userAndPost.length;
    /*por fim eu faço um for, onde a cada 5 posições do array userAndPost eu vou adicionar um album aleatorio*/
    for (let i = 0; i < 20 % lengthByUserAndPost; i++) {
        let aleatoryAlbum = Math.floor(Math.random() * albuns.length)
        userAndPost.splice(count, 0, albumAndPhotos[aleatoryAlbum]);
        count = count + 5;
    }
    return userAndPost
}
