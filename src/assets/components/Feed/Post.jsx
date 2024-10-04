/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import "../Feed/Post.css"
import Comment from "./Comment";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../App";
import { CreateNewComment, GetAllComments } from "../../APIs/CommentsAPI";
export default function Post( { post }) {

    const { users, loggedInUser } = useContext(AppContext)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({
        postId: post.id,
        content: "",
        contactId: loggedInUser.id
    })


    const user = users.find(u => u.id === post.contactId)
    if (user === undefined){ //janky, wanna fix this ...
        return
    }

    const fetchComments = async () =>{
        try {
            const result = await GetAllComments("thomaafl", post.id)
            setComments(result)
        } catch (error) {
            console.error("Error fetching comments: " + error)
        }
    }

    const handleChange1 = (event) => {
        setNewComment(event.target.value)
    }

    const handleSubmitComment = async () => {
        console.log(newComment)
        try {
            const result = await CreateNewComment("thomaafl", post.id, newComment)
            setComments([...comments, result])
        } catch (error) {
            console.error("Error while adding a comment: " + error)
        }
    }



    useEffect (() => {
        fetchComments()
    }, [] )
    
    if(!comments) {
        return <p>Loading comments</p>
    }
    return (
        <>
            <div className="post">
                <div className="post-header">
                    <div className="post-profile-logo" style={{backgroundColor: user.favouriteColour}}>
                        <p className="initial-post" >{user.firstName.charAt(0)}{user.lastName.charAt(0)}</p>
                    </div>
                    <div className="post-top-info">
                        <span className="post-username">{user.firstName} {user.lastName}</span>
                        <span className="post-title">{post.title}</span>
                    </div>
                </div>

                <div className="post-content">
                    <p>{post.content}</p>
                </div>
                <hr className="post-divider" /> 

                <div className="post-comment-section">

                    
                    {comments.map((comment, index) => (
                        <Comment key = {index} comment={comment} />
                    ))}
                    
                    <div className="your-comment">
                        <div className="your-comment-profile-logo">
                            <p className="initial-your-comment" >{loggedInUser.firstName.charAt(0)}{loggedInUser.lastName.charAt(0)}</p>
                            
                        </div>
                        <input
                            type = "text"
                            placeholder="Write a comment..."
                            className="comment-input"    
                            value = {newComment.content}
                            onChange={handleChange1}
                            >
                        </input>

                        <button className="comment-button" onClick={handleSubmitComment}>Comment</button>
                    </div>


                </div>
                

            </div>
        </>
    )
    
}