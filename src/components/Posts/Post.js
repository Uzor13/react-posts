import React from 'react';
import {Link} from "react-router-dom";
import {PostCard, PostCardContent, PostHeading} from "../../style";

const Post = ({title, body, id}) => {

    return (
        <PostCard>
            <PostCardContent>
                <PostHeading>
                    {title}
                </PostHeading>
                <p>{body}</p>
                <Link to={`/post/${id}`}>
                    Read More
                </Link>
            </PostCardContent>
        </PostCard>
    );
};

export default Post;
