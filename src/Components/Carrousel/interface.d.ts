export interface Album{
    AlbumData: {
        userId?: number,
        id?: number,
        title?: string,
        photo?: {
            albumId?: number,
            id?: number,
            title?: string,
            url?: string,
            thumbnailUrl?: string
        }
    }[]
}
