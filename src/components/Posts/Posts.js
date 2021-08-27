import React from 'react';
import Post from "./Post";
import {GridContainer} from "../../style";

const Posts = ({posts}) => {

    return (
        <GridContainer>
            {posts.map(post => (
                <div key={post.id}>
                    <Post
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />
                </div>
            ))}
        </GridContainer>
    );
};

export default Posts;
