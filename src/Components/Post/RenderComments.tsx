import React from "react";
import {CommentBody} from "./CommentBody";
import {FlatList, ListRenderItem} from "react-native";
import {PostData} from "./interface";

const RenderComments: React.FC<PostData> = ({post}) => {
    const renderItem:  ListRenderItem<{postId?: number | undefined, id: number, name: string, email: string, body: string}> | null | undefined
        = ({item}) => (
        <CommentBody
            email={item.email}
            body={item.body}
            id={item.id}/>
    )

    return(
        <FlatList
            keyExtractor={(item, index) => `${item.email}-${index.toString()}`}
            showsVerticalScrollIndicator={false}
            style={{width: "93%"}}
            data={post?.comments}
            renderItem={renderItem}
        />
    )
}

export {RenderComments};
