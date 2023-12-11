import {PostData} from "../Components/Post/interface";

export const getUsersAndPosts = async (id: number): Promise<PostData[]> => {
    const baseURL = "https://jsonplaceholder.typicode.com"

    const fetchJSON = async (url: string) => {
        const getData = await fetch(`${baseURL}/${url}`);
        return await getData.json();
    }
    const user = await fetchJSON(`users/${id}`)
    const posts = await fetchJSON(`posts?userId=${user.id}`)
    const allUsersPost: PostData[] = [];


    await Promise.all(posts.map(async (item: any) => {
        const comment = await fetchJSON(`comments?postId=${item.id}`)
        allUsersPost.push({
            userData: {
                userId: user.id,
                userMail: user.email,
                userName: user.username,
            },
            post: {
                userId: item.userId,
                id: item.id,
                title: item.title,
                body: item.body,
                comments: [...comment],
            }
        })
    }))

    let albumPosition = 4;
    for (let iterator = 0; iterator < 2; iterator++) {

        let albumAleatorio = Math.floor(Math.random() * 100);
        let album = await fetchJSON(`albums/${albumAleatorio}`);
        let photos = await fetchJSON(`photos?albumId=${album.id}`);
        let userAlbum = await fetchJSON(`users/${album.userId}`);

        allUsersPost.splice(albumPosition, 1, {
            userData: {
                userId: userAlbum.id,
                userMail: userAlbum.email,
                userName: userAlbum.username,
            },
            album: {
                AlbumData: {
                    userId: userAlbum.id,
                    id: album.id,
                    title: album.title,
                    photos: [...photos],
                }
            }
        })
        albumPosition = albumPosition + 5;
    }

    return allUsersPost;
}

export const getUserProfile = async (id: number): Promise<PostData[]> => {
    const baseURL = "https://jsonplaceholder.typicode.com"

    const fetchJSON = async (url: string) => {
        const getData = await fetch(`${baseURL}/${url}`);
        return await getData.json();
    }
    const user = await fetchJSON(`users/${id}`)
    const posts = await fetchJSON(`posts?userId=${user.id}`)
    const allPost: PostData[] = [];


    await Promise.all(posts.map(async (item: any) => {
        const comment = await fetchJSON(`comments?postId=${item.id}`)
        allPost.push({
            userData: {
                userId: user.id,
                userMail: user.email,
                userName: user.username,
            },
            post: {
                userId: item.userId,
                id: item.id,
                title: item.title,
                body: item.body,
                comments: [...comment],
            }
        })
    }))

    let albums = await fetchJSON(`albums?userId=${user.id}`);
    await Promise.all(albums.map(async (album: any) => {
        let photos = await fetchJSON(`photos?albumId=${album.id}`);
        allPost.push({
            userData: {
                userId: user.id,
                userMail: user.email,
                userName: user.username,
            },
            album: {
                AlbumData: {
                    userId: user.id,
                    id: album.id,
                    title: album.title,
                    photos: [...photos],
                }
            }
        })
    }))
    return allPost;
}
