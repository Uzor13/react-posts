import React, {useEffect, useState} from 'react';
import {Button, DangerBtn, FlexContainer} from "../../style";

const PostDetail = ({match, history}) => {

    const [post, setPost] = useState([]);

    const getPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then(response => response.json())
            .then(data => setPost([data]))
            .catch(err => console.log(err.message))
    }


    function handleDeleteClick(id) {
        setPost(post.filter((post) => post.id !== id));
        // history.push("/")
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <FlexContainer>
            {post.map(post => (
                <div className='post-detail' key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <DangerBtn onClick={() => handleDeleteClick(post.id)}>Delete Post</DangerBtn>
                </div>
            ))}
        </FlexContainer>
    );
};

export default PostDetail;
